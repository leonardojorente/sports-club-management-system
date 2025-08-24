import { type Locator, type Page } from '@playwright/test';

export class DashboardPage{
    readonly appDashBoard: Locator;

    constructor(page: Page) {
        this.appDashBoard = page.locator('app-dashboard').getByText('Total de contribuciones');
    }
}