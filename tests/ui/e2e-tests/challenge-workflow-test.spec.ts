import { expect, test } from '@tests/ui/fixtures/pages-fixture';
import  RelativePath  from '@tests/data/endpoint-relative-path.json';
import { RegisterRequests } from '@tests/api/api-requests/register-user-requests';
import { registerUserData } from '@tests/support/factories/register-user-factory';
import { generateRandomAlphaNumericString } from '../../support/utils';

test.describe('Challenge workflow for Qubika Sports Club Management System', () => {
  let userName = generateRandomAlphaNumericString(5) + '@mail.com';
  let password = generateRandomAlphaNumericString(5);

  test('TC01 - Create category and sub-category', {tag: ['@regression']},  async ({page, request, loginPage, dashboardPage, sideNavBarComponent, categoryTypePage, addCategoryComponent, toastComponent}) => {
    const categoryName = generateRandomAlphaNumericString(5);
    const subCategoryName = generateRandomAlphaNumericString(5);

    await test.step('1 - Create a new user through API and save the user information', async () => {
    const registerPayloadFactory = registerUserData({ email: userName, password: password });

      const registerRequests = new RegisterRequests(request)
      const response = await registerRequests.registerUser(registerPayloadFactory)
      expect(response.status()).toBe(201);
    });

    await test.step('2 - Go to Qubika Sports Club Management System', async () => {
      await page.goto(RelativePath.WEB.LOGIN);
    });

    await test.step('3 - Validate that the login page is displayed correctly', async () => {
      await expect(loginPage.emailInput).toBeVisible();
      await expect(loginPage.passwordInput).toBeVisible();
      await expect(page).toHaveURL(new RegExp('\/auth\/login$'));
    });

    await test.step('4 - Log in with the created user', async () => {
      await loginPage.loginWebApp(userName, password);
    });

    await test.step('5 - Validate that the user is logged in', async () => {
      await expect(page).toHaveURL(new RegExp('\/dashboard$'));
      await expect(dashboardPage.appDashBoard).toBeVisible();
    });

    await test.step('6a - Go to the Category page', async () => {
      await sideNavBarComponent.clickSideMenuOption('Tipos de Categorias');
      await expect(page).toHaveURL(new RegExp('\/category-type$'));
    });

    await test.step('6b - Create a new category and validate that the category was created successfully', async () => {
      await categoryTypePage.clickAddCategoryBtn()
      await addCategoryComponent.insertCategoryName(categoryName)
      await addCategoryComponent.clickcreateCategoryBtn()
      await expect(toastComponent.toastMessage('Tipo de categoría adicionada satisfactoriamente')).toBeVisible();
      await expect(toastComponent.toastMessage('Tipo de categoría adicionada satisfactoriamente')).not.toBeVisible();

    });

    await test.step('6c - Create a sub category and validate it is displayed in the Categories list', async () => {
      await categoryTypePage.clickAddCategoryBtn()
      await addCategoryComponent.insertCategoryName(subCategoryName)
      await addCategoryComponent.clickIsSubCategoryCheckBox()
      await addCategoryComponent.insertMainCategoryName(categoryName)
      await addCategoryComponent.selectMainCategory(categoryName)
      await addCategoryComponent.clickcreateCategoryBtn()
      await expect(toastComponent.toastMessage('Tipo de categoría adicionada satisfactoriamente')).toBeVisible();
    });    

  });
})



