import { type Locator, type Page } from '@playwright/test';

export class CategoryTypePage{
    readonly addCategoryBtn: Locator;

    constructor(page: Page) {
        this.addCategoryBtn = page.locator('button').getByText('Adicionar');
    }

    async clickAddCategoryBtn(){
        await this.addCategoryBtn.click()
    }
}