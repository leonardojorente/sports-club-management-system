import { request as playwrightRequest } from '@playwright/test';
import  LoginPayload  from '@tests/data/request-payloads/post-signin-payload.json';
import { LoginRequests } from '@tests/api/api-requests/login-requests';

LoginPayload.email = process.env.USER!;
LoginPayload.password = process.env.PASSWORD!;

async function globalSetup() {
  const request = await playwrightRequest.newContext();
  const loginRequests = new LoginRequests(request)
  const response = await loginRequests.doLogin(LoginPayload)

  const responseBody = await response.json();

  process.env.API_TOKEN = `Bearer ${responseBody.token}`
  console.log('Token generated for API tests: ' + process.env.API_TOKEN);
}

export default globalSetup;

