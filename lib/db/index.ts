import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

function createDb() {
  if (!process.env.DATABASE_URL) {
    return null;
  }
  const sql = neon(process.env.DATABASE_URL);
  return drizzle(sql, { schema });
}

let _db: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getDb() {
  if (!_db) {
    _db = createDb();
  }
  return _db;
}

/** @deprecated Use getDb() instead — returns null when no DATABASE_URL */
export const db = new Proxy({} as ReturnType<typeof drizzle<typeof schema>>, {
  get(_, prop) {
    const instance = getDb();
    if (!instance) throw new Error("DATABASE_URL not configured");
    return (instance as Record<string | symbol, unknown>)[prop];
  },
});

export type DB = ReturnType<typeof drizzle<typeof schema>>;
