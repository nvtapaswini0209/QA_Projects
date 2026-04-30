import { Page } from '@playwright/test';            //Page is the core playwirght object used to interact with browser

export class LoginPage {                           //Class creation (POM)
  constructor(private page: Page) {}               //(imp) 

  async navigate() {
    await this.page.goto('https://demo.applitools.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#log-in');
  }
}