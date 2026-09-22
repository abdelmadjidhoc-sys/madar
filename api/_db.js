/**
 * Shared Postgres (Neon) connection pool for serverless functions.
 * `max: 1` is the standard pattern for serverless — one connection per warm
 * function instance, reused across invocations rather than per-request.
 */
const { Pool } = require("pg");

let pool;
function getPool() {
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  }
  return pool;
}

module.exports = { getPool };
