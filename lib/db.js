/**
 * Shared Postgres (Neon) connection pool for the API route handlers.
 * `max: 1` is the standard pattern for serverless — one connection per warm
 * function instance, reused across invocations rather than per-request.
 */
import { Pool } from "pg";

let pool;
export function getPool() {
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  }
  return pool;
}
