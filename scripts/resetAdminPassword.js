/**
 * Standalone Admin Password Reset Script
 * Usage: node scripts/resetAdminPassword.js "your_new_password"
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const newPassword = process.argv[2];

if (!newPassword || newPassword.length < 8) {
  console.error('\x1b[31mError: Please provide a password of at least 8 characters.\x1b[0m');
  console.log('Usage example: node scripts/resetAdminPassword.js "MyNewSecurePassword2026!"');
  process.exit(1);
}

const dbPath = path.resolve(process.cwd(), 'data', 'db.json');

if (!fs.existsSync(dbPath)) {
  console.error('\x1b[31mError: data/db.json not found. Run the app once first.\x1b[0m');
  process.exit(1);
}

try {
  const raw = fs.readFileSync(dbPath, 'utf-8');
  const data = JSON.parse(raw);

  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(newPassword, salt, 100000, 64, 'sha512').toString('hex');

  data.admin = {
    ...data.admin,
    salt,
    passwordHash: hash,
    updatedAt: new Date().toISOString(),
  };

  // Invalidate previous sessions for security
  data.sessions = {};

  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf-8');

  console.log('\x1b[32m✔ Admin password successfully updated in real database!\x1b[0m');
  console.log(`Username: \x1b[36m${data.admin.username || 'admin'}\x1b[0m`);
  console.log(`New Password: \x1b[36m${newPassword}\x1b[0m`);
} catch (err) {
  console.error('\x1b[31mFailed to update password:\x1b[0m', err);
  process.exit(1);
}
