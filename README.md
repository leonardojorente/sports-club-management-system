
# Sports Club Management System - Playwright

This project is configured with Playwright for end-to-end test automation of the Sports Club Management System.

## Main scripts to execute

npm run ui-mode
npm run ui-challenge-workflow-tests
npm run tag-tests
npm run html-report
npm run allure-report

## Structure
- `tests/` — Contains all test suites and support files.
- `playwright.config.ts` — Playwright configuration file.
- `.env` — Environment variables (user, password, base URLs).

## Allure Reports
This project uses [Allure](https://docs.qameta.io/allure/) for advanced test reporting. After running your tests, use the command above to generate and view the report.

## Documentation
See the [Playwright Docs](https://playwright.dev/docs/intro) for more details.

## Enhacements
- allure report
- CI integration with github actions
- CI report through github pages 
- use of .env
- user, password and base URL set on Ci to not show locally
- use of page objects pattern
- use of factories pattern
- use of global setup to set token
- use of fixtures + page objects to improve reading
- use of steps to improve test reading
- use of tag @regression for possible

## Code explanation

## row to run
run local:
1- download the branch
2- npm install for the dependencies
3- remove: .removeThisPart from .env.removeThisPart
4- execute: npm run ui-challenge-workflow-tests in the command line
5- execute: npm run allure-report

run remote:




