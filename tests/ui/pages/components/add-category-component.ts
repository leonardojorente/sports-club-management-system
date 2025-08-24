import { type Locator, type Page } from '@playwright/test';

export class addCategoryComponent{
    readonly addCategoryDialog: Locator;
    readonly categoryName: Locator;
    readonly isSubCategoryCheckBox: Locator;
    readonly createCategoryBtn: Locator;
    readonly mainCategoryInput: Locator;
    readonly mainCategoryDropDownOption: (categoryOption: string) => Locator;

    constructor(page: Page) {
    this.addCategoryDialog = page.locator('[class*="custom-dialog-container"]');
    this.categoryName = this.addCategoryDialog.locator('#input-username');
    this.isSubCategoryCheckBox = this.addCategoryDialog.locator('[for="customCheckMain"] span');
    this.createCategoryBtn = this.addCategoryDialog.locator('[type="submit"]');
    this.mainCategoryInput = this.addCategoryDialog.locator('[placeholder="Seleccione la categoría padre"] input');
    this.mainCategoryDropDownOption = (categoryOption: string) => this.addCategoryDialog.locator('[role="listbox"] span').getByText(`${categoryOption}`);
    }

    async clickIsSubCategoryCheckBox(){
        await this.isSubCategoryCheckBox.click();
    }

    async clickcreateCategoryBtn(){
        await this.createCategoryBtn.click();
    }

    async insertCategoryName(categoryName: string){
        await this.categoryName.clear()
        await this.categoryName.fill(categoryName);
    }

    async insertMainCategoryName(mainCategoryName: string){
        await this.mainCategoryInput.clear()
        await this.mainCategoryInput.fill(mainCategoryName);
    }

    async selectMainCategory(categoryOption: string){
        await this.mainCategoryInput.click();
        await this.mainCategoryDropDownOption(categoryOption).click();
    }
    
}