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

export const ACCESS_TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyYWh1bHNpbmdoNjI0NWdAZ21haWwuY29tIiwiZXhwIjoxNzc5MTAwNjkxLCJpYXQiOjE3NzkwOTk3OTEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI0M2ZjODE2Ni1mN2Y5LTQxOWUtODgxZi05Nzk0MjM1MDc4MDIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJyYWh1bCBzaW5naCIsInN1YiI6IjQ3MTkyOGI3LTUyYWUtNGRhYy05NTdjLTIyYTYwZjQ5YjJhNCJ9LCJlbWFpbCI6InJhaHVsc2luZ2g2MjQ1Z0BnbWFpbC5jb20iLCJuYW1lIjoicmFodWwgc2luZ2giLCJyb2xsTm8iOiIwMTAxIiwiYWNjZXNzQ29kZSI6ImZ6RVFTUSIsImNsaWVudElEIjoiNDcxOTI4YjctNTJhZS00ZGFjLTk1N2MtMjJhNjBmNDliMmE0IiwiY2xpZW50U2VjcmV0IjoiY3hwYXpyWkJHbmt3a1pDViJ9.nb3-eDzBMK8xtXyF0JryG-Atd4SJHs37eVgNvdYdtK8";