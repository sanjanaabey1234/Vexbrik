import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/auth";
import { getProjects, getSiteSettings } from "@/lib/content";
import { deleteProject, logout, saveProject, saveSettings } from "./actions";

const input = "mt-1.5 w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm outline-none focus:border-brand";
const gradients = ["from-indigo-500 to-cyan-400", "from-emerald-500 to-teal-400", "from-orange-500 to-amber-400", "from-violet-500 to-fuchsia-400", "from-sky-500 to-blue-400", "from-lime-500 to-green-400"];

export default async function AdminPage() {
  if (!(await isAdmin())) redirect("/admin/login");
  const [settings, projects] = await Promise.all([getSiteSettings(), getProjects()]);
  return (
    <main className="mx-auto max-w-6xl px-4 py-28 sm:px-6">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div><p className="text-sm font-semibold uppercase tracking-widest text-brand-2">Content management</p><h1 className="mt-2 text-3xl font-bold">Website admin</h1></div>
        <form action={logout}><button className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold hover:border-brand">Sign out</button></form>
      </div>

      <section className="card p-6 sm:p-8">
        <h2 className="text-xl font-bold">Contact & company details</h2>
        <p className="mt-1 text-sm text-muted">These details appear on the contact page and footer.</p>
        <form action={saveSettings} className="mt-6 grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-medium">Company name<input name="name" defaultValue={settings.name} className={input} /></label>
          <label className="text-sm font-medium">Email<input required type="email" name="email" defaultValue={settings.email} className={input} /></label>
          <label className="text-sm font-medium">Phone<input required name="phone" defaultValue={settings.phone} className={input} /></label>
          <label className="text-sm font-medium">Address<input required name="address" defaultValue={settings.address} className={input} /></label>
          <label className="text-sm font-medium sm:col-span-2">Working hours<input name="workingHours" defaultValue={settings.workingHours} className={input} /></label>
          <label className="text-sm font-medium sm:col-span-2">Company description<textarea name="description" defaultValue={settings.description} rows={3} className={input} /></label>
          <label className="text-sm font-medium">GitHub URL<input name="github" defaultValue={settings.socials.github} className={input} /></label>
          <label className="text-sm font-medium">LinkedIn URL<input name="linkedin" defaultValue={settings.socials.linkedin} className={input} /></label>
          <label className="text-sm font-medium sm:col-span-2">X / Twitter URL<input name="twitter" defaultValue={settings.socials.twitter} className={input} /></label>
          <div className="sm:col-span-2"><button className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-400">Save contact details</button></div>
        </form>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold">Projects</h2><p className="mt-1 text-sm text-muted">Edit existing work or add a new portfolio card.</p>
        <div className="mt-6 space-y-6">
          {projects.map((project) => <ProjectForm key={project.id} project={project} />)}
          <ProjectForm />
        </div>
      </section>
    </main>
  );
}

function ProjectForm({ project }: { project?: Awaited<ReturnType<typeof getProjects>>[number] }) {
  const isNew = !project;
  return <article className="card p-6 sm:p-8"><h3 className="text-lg font-bold">{isNew ? "Add project" : project.title}</h3>
    <form action={saveProject} className="mt-5 grid gap-4 sm:grid-cols-2">
      <input type="hidden" name="id" defaultValue={project?.id} />
      <label className="text-sm font-medium">Title<input required name="title" defaultValue={project?.title} className={input} /></label>
      <label className="text-sm font-medium">Category<input required name="category" defaultValue={project?.category} className={input} /></label>
      <label className="text-sm font-medium sm:col-span-2">Description<textarea required name="description" rows={3} defaultValue={project?.description} className={input} /></label>
      <label className="text-sm font-medium">Technologies <span className="text-muted">(comma separated)</span><input required name="tech" defaultValue={project?.tech.join(", ")} className={input} /></label>
      <label className="text-sm font-medium">Colour style<select name="gradient" defaultValue={project?.gradient || gradients[0]} className={input}>{gradients.map((gradient) => <option key={gradient} value={gradient}>{gradient.replace("from-", "").replace(" to-", " → ")}</option>)}</select></label>
      <div className="flex flex-wrap gap-3 sm:col-span-2"><button className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400">{isNew ? "Add project" : "Save project"}</button>
      {!isNew && <button formAction={deleteProject} className="rounded-full border border-red-400/40 px-5 py-2.5 text-sm font-semibold text-red-200 hover:bg-red-400/10">Delete</button>}</div>
    </form>
  </article>;
}
