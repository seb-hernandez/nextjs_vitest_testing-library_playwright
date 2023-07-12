import { test, expect } from '@playwright/test';

test('should render correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Hello World');
});
