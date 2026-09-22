/**
 * One-time (idempotent) table setup for Contact submissions.
 * Usage: node --env-file=.env scripts/setup-db.js
 */
const { Client } = require("pg");

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set. Copy .env.example to .env first.");
    process.exit(1);
  }

  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();

  await client.query(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id SERIAL PRIMARY KEY,
      full_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      age_range TEXT NOT NULL,
      current_status TEXT NOT NULL,
      current_status_other TEXT,
      email TEXT,
      guidance_field TEXT,
      main_challenge TEXT,
      desired_outcome TEXT,
      tried_before BOOLEAN,
      consultation_method TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);

  console.log("contact_submissions table is ready.");
  await client.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
