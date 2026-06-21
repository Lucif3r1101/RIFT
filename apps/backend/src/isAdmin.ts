// Owner allow-list for the private stats dashboard. Set ADMIN_EMAILS in the
// environment as a comma-separated list (e.g. "you@example.com,other@x.com").
export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const allow = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  return allow.includes(email.toLowerCase());
}
