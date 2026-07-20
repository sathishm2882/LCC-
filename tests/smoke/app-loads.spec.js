const { test, expect } = require('@playwright/test');

test.describe('Smoke: App Loads', () => {
  test('home page returns 200 and has a title', async ({ page }) => {
    const response = await page.goto('/');
    expect(response.status()).toBe(200);

    const title = await page.title();
    expect(title).toBeTruthy();
  });

  test('login page is accessible', async ({ page }) => {
    const response = await page.goto('/login');
    expect(response.status()).toBe(200);
  });
});
