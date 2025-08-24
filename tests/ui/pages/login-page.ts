import { type Locator, type Page } from '@playwright/test';

export class LoginPage{
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page) {
        this.emailInput = page.locator('input[formcontrolname="email"]');
        this.passwordInput = page.locator('input[formcontrolname="password"]');
        this.loginBtn = page.getByRole('button', {name: 'Autenticar'});
    }

    async insertEmail(email: string){
        await this.emailInput.clear()
        await this.emailInput.fill(email);
    }

    async insertPassword(password: string){
        await this.passwordInput.clear()
        await this.passwordInput.fill(password);
    }

    async clickSignInButton(){
        await this.loginBtn.click();
    }

    async loginWebApp(email: string, password: string){
        await this.insertEmail(email)
        await this.insertPassword(password)
        await this.clickSignInButton()
    }
}