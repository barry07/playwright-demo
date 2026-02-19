const { test, expect } = require('@playwright/test');

test('Check Docker App Status', async ({ page }) => {
  // 1. Tell the browser to visit your running Docker container
  await page.goto('http://localhost:8080');

  // 2. Expect the heading to contain our specific text
  const heading = page.locator('h1');
  await expect(heading).toContainText('CI/CD Pipeline active.');
});