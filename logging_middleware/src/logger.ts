import axios from "axios";
import { ACCESS_TOKEN, LOG_API_URL } from "./constants";
import { Level, Package, Stack } from "./types";
import { validatePayload } from "./validate";

export const Log = async (
  stack: Stack,
  level: Level,
  pkg: Package,
  message: string
) => {
  const payload = {
    stack,
    level,
    package: pkg,
    message
  };

  validatePayload(payload);

  const response = await axios.post(LOG_API_URL, payload, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json"
    }
  });

  return response.data;
};