/**
 * Creates (or resets) a top account: the system admin (مدير النظام) or the CEO.
 * Usage: node --env-file=.env scripts/create-account.js admin|ceo "الاسم الكامل" email@example.com "كلمة المرور"
 * If the email already exists, that member gets the role and the new password.
 */
const { Client } = require("pg");
const { hashPassword } = require("../lib/password");

async function main() {
  const [role, fullName, email, password] = process.argv.slice(2);
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set. Copy .env.example to .env first.");
    process.exit(1);
  }
  if (!["admin", "ceo"].includes(role) || !fullName || !email || !password || password.length < 8) {
    console.error('Usage: node --env-file=.env scripts/create-account.js admin|ceo "full name" email "password (8+ chars)"');
    process.exit(1);
  }

  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();
  await client.query(
    `INSERT INTO members (full_name, email, password_hash, role)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT (email) DO UPDATE
       SET role = EXCLUDED.role, is_active = true, password_hash = EXCLUDED.password_hash,
           full_name = EXCLUDED.full_name`,
    [fullName, email.trim().toLowerCase(), hashPassword(password), role]
  );
  console.log(role + " account is ready for " + email.trim().toLowerCase());
  await client.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
