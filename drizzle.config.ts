import { defineConfig } from "drizzle-kit";
import { ConfigService } from "@nestjs/config";

export default defineConfig({
  schema: "./lib/schema.ts",
  out: "./src/database/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});