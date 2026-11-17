/**
 * One-time (idempotent) table setup for Contact submissions and join applications.
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

  await client.query(`
    CREATE TABLE IF NOT EXISTS join_applications (
      id SERIAL PRIMARY KEY,
      full_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL,
      age INTEGER NOT NULL,
      organization TEXT,
      instagram TEXT,
      heard_from TEXT NOT NULL,
      heard_from_other TEXT,
      department TEXT NOT NULL,
      has_experience BOOLEAN NOT NULL,
      experience_details TEXT,
      skills TEXT NOT NULL,
      motivation TEXT NOT NULL,
      weekly_hours TEXT NOT NULL,
      field_work TEXT NOT NULL,
      cv_filename TEXT NOT NULL,
      cv_mime_type TEXT NOT NULL,
      cv_data BYTEA NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);

  console.log("join_applications table is ready.");

  await client.query(`
    CREATE TABLE IF NOT EXISTS members (
      id SERIAL PRIMARY KEY,
      full_name TEXT NOT NULL,
      phone TEXT,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'visitor' CHECK (role IN ('visitor', 'member', 'manager', 'ceo', 'admin')),
      is_photographer BOOLEAN NOT NULL DEFAULT false,
      is_editor BOOLEAN NOT NULL DEFAULT false,
      is_active BOOLEAN NOT NULL DEFAULT true,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      last_login_at TIMESTAMPTZ
    );
  `);

  // Sign-up no longer asks for a phone number (earlier versions required one).
  await client.query("ALTER TABLE members ALTER COLUMN phone DROP NOT NULL");

  // The "admin" (مدير النظام) role was added after the table was first created.
  await client.query("ALTER TABLE members DROP CONSTRAINT IF EXISTS members_role_check");
  await client.query(
    "ALTER TABLE members ADD CONSTRAINT members_role_check CHECK (role IN ('visitor', 'member', 'manager', 'ceo', 'admin'))"
  );

  console.log("members table is ready.");

  await client.query(`
    CREATE TABLE IF NOT EXISTS coverages (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      organization TEXT,
      location TEXT,
      starts_at TIMESTAMPTZ NOT NULL,
      ends_at TIMESTAMPTZ,
      coverage_type TEXT NOT NULL DEFAULT 'both' CHECK (coverage_type IN ('photo', 'video', 'both')),
      description TEXT,
      notes TEXT,
      status TEXT NOT NULL DEFAULT 'new'
        CHECK (status IN ('new', 'assigned', 'covered', 'editing', 'review', 'published', 'cancelled')),
      edit_deadline DATE,
      deliverable_url TEXT,
      created_by INTEGER REFERENCES members(id) ON DELETE SET NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS coverage_assignments (
      coverage_id INTEGER NOT NULL REFERENCES coverages(id) ON DELETE CASCADE,
      member_id INTEGER NOT NULL REFERENCES members(id) ON DELETE CASCADE,
      kind TEXT NOT NULL CHECK (kind IN ('photographer', 'editor')),
      PRIMARY KEY (coverage_id, member_id, kind)
    );
  `);

  // One editor per coverage (several photographers are fine).
  await client.query(`
    CREATE UNIQUE INDEX IF NOT EXISTS one_editor_per_coverage
      ON coverage_assignments (coverage_id) WHERE kind = 'editor';
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS coverage_activity (
      id SERIAL PRIMARY KEY,
      coverage_id INTEGER NOT NULL REFERENCES coverages(id) ON DELETE CASCADE,
      member_id INTEGER REFERENCES members(id) ON DELETE SET NULL,
      action TEXT NOT NULL,
      from_status TEXT,
      to_status TEXT,
      note TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);

  console.log("coverages tables are ready.");

  await client.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
