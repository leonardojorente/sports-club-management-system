import { type Locator, type Page } from '@playwright/test';

export class SideNavBarComponent{
    readonly sideNavMenu: Locator;
    readonly sideMenuOption: (menuOption: string) => Locator;

    constructor(page: Page) {
        this.sideNavMenu = page.locator('#sidenav-main');
        this.sideMenuOption = (menuOption: string) => this.sideNavMenu.locator('a').getByText(`${menuOption}`);
    }

    async clickSideMenuOption(menuOption: string){
        await this.sideMenuOption(menuOption).click();
    }
}