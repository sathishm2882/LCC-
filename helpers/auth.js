const { expect } = require('@playwright/test');

const TEST_USERNAME = process.env.TEST_USERNAME;
const TEST_PASSWORD = process.env.TEST_PASSWORD;

/**
 * Log in to the LCC application.
 * Update selectors once the login page is built.
 */
async function login(page, { username, password } = {}) {
  const user = username || TEST_USERNAME;
  const pass = password || TEST_PASSWORD;

  if (!user || !pass) {
    throw new Error('Missing credentials. Set TEST_USERNAME and TEST_PASSWORD in .env');
  }

  await page.goto('/login');

  // TODO: Update these selectors to match the actual LCC login page
  await page.fill('input[placeholder="Enter your username"]', user);
  await page.fill('input[type="password"]', pass);
  await page.click('button[type="submit"]');

  // TODO: Update this to match the actual post-login URL or element
  await page.waitForURL('**/dashboard**', { timeout: 10000 });
}

/**
 * Log in and return a logged-in page (convenience wrapper for test fixtures).
 */
async function loginAndReturn(page, credentials) {
  await login(page, credentials);
  return page;
}

module.exports = { login, loginAndReturn };
