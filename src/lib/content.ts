import getMongoClient from "@/lib/mongodb";
import { projects as defaultProjects, site as defaultSite } from "@/data/site";

export type Project = (typeof defaultProjects)[number] & { id: string };

export type SiteSettings = typeof defaultSite & {
  workingHours: string;
};

export const defaultSettings: SiteSettings = {
  ...defaultSite,
  workingHours: "Mon – Fri, 9:00 AM – 6:00 PM",
};

const fallbackProjects: Project[] = defaultProjects.map((project) => ({
  ...project,
  id: project.title,
}));

async function database() {
  const client = await getMongoClient();
  return client.db(process.env.MONGODB_DB || "vexbrik");
}

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const settings = await (await database())
      .collection<SiteSettings & { _id: string }>("settings")
      .findOne({ _id: "site" });
    return settings ? { ...defaultSettings, ...settings } : defaultSettings;
  } catch {
    return defaultSettings;
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const projects = await (await database())
      .collection<Project>("projects")
      .find({})
      .sort({ title: 1 })
      .toArray();
    return projects.length ? projects : fallbackProjects;
  } catch {
    return fallbackProjects;
  }
}

export async function getDatabase() {
  return database();
}

export async function seedProjects() {
  const db = await database();
  if ((await db.collection<Project>("projects").countDocuments()) === 0) {
    await db.collection<Project>("projects").insertMany(fallbackProjects);
  }
}
