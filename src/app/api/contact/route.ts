import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/content";

const value = (input: unknown) => (typeof input === "string" ? input.trim() : "");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const submission = {
      name: value(body.name),
      email: value(body.email),
      company: value(body.company),
      budget: value(body.budget),
      message: value(body.message),
      createdAt: new Date(),
    };

    if (!submission.name || !submission.email || !submission.message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    await (await getDatabase()).collection("contact_submissions").insertOne(submission);
    revalidatePath("/admin");
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "We could not send your message. Please try again." }, { status: 500 });
  }
}
