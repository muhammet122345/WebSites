import crypto from "crypto";

export const ADMIN_COOKIE = "fazlalikat_admin_session";

function getSecret(): string {
  return process.env.ADMIN_PASSWORD ?? "fazlalikat-degistir-123";
}

export function createSessionToken(): string {
  return crypto.createHmac("sha256", getSecret()).update("admin-session").digest("hex");
}

export function verifyPassword(password: string): boolean {
  return password === getSecret();
}

export function isValidSessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const expected = createSessionToken();
  if (token.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(token), Buffer.from(expected));
}
