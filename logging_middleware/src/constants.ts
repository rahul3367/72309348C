export const LOG_API_URL = "http://4.224.186.213/evaluation-service/logs";

export const VALID_STACKS = ["frontend", "backend"] as const;

export const VALID_LEVELS = [
  "debug",
  "info",
  "warn",
  "error",
  "fatal"
] as const;

export const VALID_PACKAGES = {
  frontend: ["api", "component", "hook", "page", "state", "style"],
  backend: [
    "cache",
    "controller",
    "cron_job",
    "db",
    "domain",
    "handler",
    "repository",
    "route",
    "service"
  ],
  common: ["auth", "config", "middleware", "utils"]
} as const;

export const ACCESS_TOKEN =
  "PASTE_YOUR_ACCESS_TOKEN_HERE";