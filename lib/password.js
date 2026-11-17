/**
 * Password hashing with Node's built-in scrypt (no extra packages).
 * Stored format: scrypt$<salt hex>$<hash hex>. CommonJS so the setup scripts
 * in scripts/ can share it with the Next.js app.
 */
const { scryptSync, randomBytes, timingSafeEqual } = require("node:crypto");

const KEY_LENGTH = 64;

function hashPassword(password) {
  const salt = randomBytes(16);
  const hash = scryptSync(String(password), salt, KEY_LENGTH);
  return "scrypt$" + salt.toString("hex") + "$" + hash.toString("hex");
}

function verifyPassword(password, stored) {
  if (typeof stored !== "string") return false;
  const [scheme, saltHex, hashHex] = stored.split("$");
  if (scheme !== "scrypt" || !saltHex || !hashHex) return false;
  const expected = Buffer.from(hashHex, "hex");
  const actual = scryptSync(String(password), Buffer.from(saltHex, "hex"), expected.length);
  return timingSafeEqual(actual, expected);
}

module.exports = { hashPassword, verifyPassword };
