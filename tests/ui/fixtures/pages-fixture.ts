import { test as base } from '@playwright/test';
import { LoginPage } from '@tests/ui/pages/login-page';
import { DashboardPage } from '@tests/ui/pages/dashboard-page';
import { SideNavBarComponent } from '@tests/ui/pages/components/side-nav-bar-component';
import { addCategoryComponent } from '@tests/ui/pages/components/add-category-component';
import { CategoryTypePage } from '../pages/category-type-page';
import { ToastComponent } from '@tests/ui/pages/components/toast-component';

type PagesFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  sideNavBarComponent: SideNavBarComponent;
  categoryTypePage: CategoryTypePage;
  addCategoryComponent: addCategoryComponent;
  toastComponent: ToastComponent;
}

export const test = base.extend<PagesFixtures>({
  page: async ({ page }, use) => {
    await use(page);
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  sideNavBarComponent: async ({ page }, use) => {
    await use(new SideNavBarComponent(page));
  },

  categoryTypePage: async ({ page }, use) => {
    await use(new CategoryTypePage(page));
  },
  
  addCategoryComponent: async ({ page }, use) => {
    await use(new addCategoryComponent(page));
  },

  toastComponent: async ({ page }, use) => {
    await use(new ToastComponent(page));
  }
});

export { expect } from '@playwright/test';