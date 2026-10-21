"use server";

import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { clearSession, createSession, credentialsMatch, requireAdmin } from "@/lib/auth";
import { defaultSettings, getDatabase, seedProjects } from "@/lib/content";

const text = (form: FormData, key: string) => String(form.get(key) || "").trim();

function refreshSite() {
  ["/", "/projects", "/contact", "/admin"].forEach((path) => revalidatePath(path));
}

function projectId(title: string) {
  return `project-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

export async function login(formData: FormData) {
  const email = text(formData, "email");
  const password = String(formData.get("password") || "");
  if (!credentialsMatch(email, password)) redirect("/admin/login?error=1");
  await createSession(email);
  redirect("/admin");
}

export async function logout() {
  await clearSession();
  redirect("/admin/login");
}

export async function saveSettings(formData: FormData) {
  await requireAdmin();
  const db = await getDatabase();
  await db.collection<{ _id: string; [key: string]: unknown }>("settings").updateOne(
    { _id: "site" },
    {
      $set: {
        ...defaultSettings,
        name: text(formData, "name"),
        description: text(formData, "description"),
        email: text(formData, "email"),
        phone: text(formData, "phone"),
        address: text(formData, "address"),
        workingHours: text(formData, "workingHours"),
        socials: {
          github: text(formData, "github"),
          linkedin: text(formData, "linkedin"),
          twitter: text(formData, "twitter"),
        },
      },
    },
    { upsert: true },
  );
  refreshSite();
  redirect("/admin?tab=company&saved=1");
}

export async function saveProject(formData: FormData) {
  await requireAdmin();
  await seedProjects();
  const title = text(formData, "title");
  const id = text(formData, "id") || projectId(title) || randomUUID();
  const project = {
    id,
    title,
    category: text(formData, "category"),
    description: text(formData, "description"),
    tech: text(formData, "tech").split(",").map((item) => item.trim()).filter(Boolean),
    gradient: text(formData, "gradient") || "from-indigo-500 to-cyan-400",
  };
  if (!project.title || !project.category || !project.description) {
    throw new Error("Project title, category, and description are required.");
  }
  await (await getDatabase()).collection<{ id: string; [key: string]: unknown }>("projects").updateOne({ id }, { $set: project }, { upsert: true });
  refreshSite();
  redirect("/admin?tab=projects&saved=1");
}

export async function deleteProject(formData: FormData) {
  await requireAdmin();
  await seedProjects();
  await (await getDatabase()).collection<{ id: string }>("projects").deleteOne({ id: text(formData, "id") });
  refreshSite();
  redirect("/admin?tab=projects&deleted=1");
}
