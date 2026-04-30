import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Bank Login Test', async ({ page }) => {
  const login = new LoginPage(page);

  await login.navigate();
  await login.login('Admin', '12345');

  await expect(page).toHaveURL(/app.html/);
});