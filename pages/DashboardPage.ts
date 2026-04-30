import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async clickTransfer() {
    await this.page.click('text=Transfer Funds');
  }

  async transferMoney() {
    await this.page.fill('#amount', '500');
    await this.page.click('#transfer');
  }
}