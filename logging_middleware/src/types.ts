export type Stack = "frontend" | "backend";

export type Level =
  | "debug"
  | "info"
  | "warn"
  | "error"
  | "fatal";

export type FrontendPackage =
  | "api"
  | "component"
  | "hook"
  | "page"
  | "state"
  | "style";

export type BackendPackage =
  | "cache"
  | "controller"
  | "cron_job"
  | "db"
  | "domain"
  | "handler"
  | "repository"
  | "route"
  | "service";

export type CommonPackage =
  | "auth"
  | "config"
  | "middleware"
  | "utils";

export type Package =
  | FrontendPackage
  | BackendPackage
  | CommonPackage;

export interface LogPayload {
  stack: Stack;
  level: Level;
  package: Package;
  message: string;
}