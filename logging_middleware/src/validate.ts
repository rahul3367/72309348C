import { VALID_LEVELS, VALID_PACKAGES, VALID_STACKS } from "./constants";
import { LogPayload } from "./types";

export const validatePayload = (payload: LogPayload) => {
  if (!VALID_STACKS.includes(payload.stack)) {
    throw new Error("Invalid stack");
  }

  if (!VALID_LEVELS.includes(payload.level)) {
    throw new Error("Invalid level");
  }

  const allowedPackages = [
    ...VALID_PACKAGES.common,
    ...(payload.stack === "frontend"
      ? VALID_PACKAGES.frontend
      : VALID_PACKAGES.backend)
  ];

  if (!allowedPackages.includes(payload.package as never)) {
    throw new Error("Invalid package");
  }

  if (!payload.message.trim()) {
    throw new Error("Message is required");
  }
};