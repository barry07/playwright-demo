const { test, expect } = require('@playwright/test');

test('Reveal secret message', async ({ page }) => {
  // 1. goto app
  await page.goto('http://localhost:8080');

  // 2. Verify message is HIDDEN at first
  const hmessage = page.locator('#message');
  await expect(message).toBeHidden();

  // 3. Click the button to reveal the message
  await page.click('#secret-button');

  // 4. Verify message is VISIBLE after clicking the button
  await expect(hmessage).toBeVisible();
  await expect(message).toHaveText('Playwright found me!');
});