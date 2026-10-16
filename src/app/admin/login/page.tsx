import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/auth";
import { login } from "../actions";

export default async function AdminLoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  if (await isAdmin()) redirect("/admin");
  const { error } = await searchParams;
  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center px-4">
      <section className="card w-full p-8 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-2">VEXBRIK</p>
        <h1 className="mt-3 text-3xl font-bold">Admin sign in</h1>
        <p className="mt-2 text-sm text-muted">Manage your portfolio and public contact details.</p>
        {error && <p className="mt-5 rounded-lg border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-200">Incorrect email or password.</p>}
        <form action={login} className="mt-7 space-y-5">
          <label className="block text-sm font-medium">Email<input required name="email" type="email" className="mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 outline-none focus:border-brand" /></label>
          <label className="block text-sm font-medium">Password<input required name="password" type="password" className="mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 outline-none focus:border-brand" /></label>
          <button className="w-full rounded-full bg-brand px-5 py-3 font-semibold text-white transition hover:bg-indigo-400">Sign in</button>
        </form>
      </section>
    </main>
  );
}
