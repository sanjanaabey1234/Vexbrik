import "server-only";
import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const SESSION_COOKIE = "vexbrik_admin_session";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

function secret() {
  const value = process.env.ADMIN_SESSION_SECRET;
  if (!value || value.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET must be at least 32 characters.");
  }
  return value;
}

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("base64url");
}

function validSession(value?: string) {
  if (!value) return false;
  const [email, expiry, signature] = value.split(".");
  if (!email || !expiry || !signature || Number(expiry) < Date.now()) return false;
  const expected = sign(`${email}.${expiry}`);
  if (expected.length !== signature.length) return false;
  return timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}

export async function isAdmin() {
  return validSession((await cookies()).get(SESSION_COOKIE)?.value);
}

export async function requireAdmin() {
  if (!(await isAdmin())) throw new Error("Unauthorized");
}

export async function createSession(email: string) {
  const expiry = Date.now() + MAX_AGE_SECONDS * 1000;
  const value = `${email}.${expiry}.${sign(`${email}.${expiry}`)}`;
  (await cookies()).set(SESSION_COOKIE, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
}

export async function clearSession() {
  (await cookies()).delete(SESSION_COOKIE);
}

export function credentialsMatch(email: string, password: string) {
  const expectedEmail = process.env.ADMIN_EMAIL;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedEmail || !expectedPassword) return false;
  return (
    email.trim().toLowerCase() === expectedEmail.trim().toLowerCase() &&
    password.length === expectedPassword.length &&
    timingSafeEqual(Buffer.from(password), Buffer.from(expectedPassword))
  );
}
