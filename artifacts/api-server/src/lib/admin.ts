import type { Request, Response, NextFunction } from "express";
import { logger } from "./logger";

let warned = false;

export function getAdminEmails(): string[] {
  const raw = process.env.ADMIN_EMAILS ?? "";
  return raw
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}

export function isAdminUser(email: string | null | undefined): boolean {
  const allow = getAdminEmails();
  if (allow.length === 0) {
    if (!warned) {
      logger.warn(
        "ADMIN_EMAILS env var is unset — every authenticated user is treated as an admin. Set it to a comma-separated list of emails for production.",
      );
      warned = true;
    }
    return true;
  }
  if (!email) return false;
  return allow.includes(email.toLowerCase());
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.isAuthenticated()) {
    res.status(401).json({ error: "Authentication required." });
    return;
  }
  if (!isAdminUser(req.user.email)) {
    res.status(403).json({ error: "Admin access required." });
    return;
  }
  next();
}
