// button.test.ts
import { test, expect } from '@playwright/test';

test('button text', async ({ page }) => {
  await page.goto('http://localhost:6006/iframe.html?id=button--primary');
  const buttonText = await page.textContent('button');
  expect(buttonText).toBe('Primary Button');
});
