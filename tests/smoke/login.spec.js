const { test, expect } = require('@playwright/test');
const { login } = require('../../helpers/auth');

test.describe('Smoke: Login', () => {
  test('valid credentials redirect to dashboard', async ({ page }) => {
    await login(page);
    expect(page.url()).toContain('/dashboard');
  });

  test('invalid credentials show an error', async ({ page }) => {
    await page.goto('/login');

    // TODO: Update selectors to match LCC login page
    await page.fill('input[placeholder="Enter your username"]', 'bad_user');
    await page.fill('input[type="password"]', 'wrong_pass');
    await page.click('button[type="submit"]');

    // TODO: Update selector to match the actual error element
    const error = page.locator('[class*="error"], .alert-danger, .text-danger');
    await expect(error).toBeVisible({ timeout: 5000 });
  });
});
