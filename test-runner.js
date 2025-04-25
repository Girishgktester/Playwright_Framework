const { execSync } = require('child_process');

const browser = process.env.BROWSER || 'chromium';
const env = process.env.ENV || 'dev';
const tag = process.env.TAG || '';

let command = `cross-env BROWSER=${browser} ENV=${env} playwright test`;

if (tag) {
  command += ` --grep "@${tag}"`;
}

console.log(`👉 Running tests on [${browser}] for [${env}] env with [${tag || 'all'}] tests`);
execSync(command, { stdio: 'inherit' });
