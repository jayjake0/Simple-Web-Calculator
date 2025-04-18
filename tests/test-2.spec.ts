import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByText('4').click();
  await page.getByText('x', { exact: true }).click();
  await page.getByText('9').click();
  await page.getByText('=').click();
  await expect(page.locator('#nums-bottom')).toContainText('36');
});