import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";
export const { GET, POST } = makeRouteHandler({
  config,
  clientId: process.env.KEYSTATIC_GITHUB_CLIENT_ID || "dummy_id_build",
  clientSecret:
    process.env.KEYSTATIC_GITHUB_CLIENT_SECRET || "dummy_secret_build",
  secret:
    process.env.KEYSTATIC_SECRET ||
    "dummy_secret_build_min_32_chars_long_123456789",
});
