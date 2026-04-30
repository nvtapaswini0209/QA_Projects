import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test('Fund Transfer Test', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  await login.navigate();
  await login.login('Admin', '12345');

  await dashboard.clickTransfer();
  await dashboard.transferMoney();

  await expect(page.locator('.alert-success')).toBeVisible();
});