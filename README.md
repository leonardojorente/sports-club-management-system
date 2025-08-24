
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
- added possibility to use multiples environments on CI execution
- added type script config to use @ instead of relative import

## Code explanation
1- we have a .env where we have the base url, user and password.
2- In the global setup, we use the user to login by api and store the token in a env variable to be used globaly
3- We have a division based in page objects to reuse commnands, and a fixture file where we start the objects related
4- in the test, we use steps for readability, and call the fixtures to execute the actions of the test. we also can see that the creation of the new user is done by api and using factory pattern
5- we have a tag on the test to be executed together with @regression

## IMPORTANT: "subcategoty is displayed in the Categories list." could be done because on categoty page, we dont have a filter and the number of alresdy created categories is to large that we cannot see new creations. For this reason, I only set the assertion of the toast message.

6- we have a script on package.json file to execute the test. observe that 2 tests are execute for chrome and firefox. It was configured on playwright.config
7- after execute the test, we can execute the allure serve script to show the report configured
8- for version control we are using git, and as repo, we are using github
9- the code is here: https://github.com/leonardojorente/sports-club-management-system
10- we have a ci file using environemnt variables, also being able to select environment where the test will run, and it will deploy the report on web here: https://leonardojorente.github.io/sports-club-management-system/

## link video with a deeper explanation of the code
https://drive.google.com/drive/folders/1zCSPlVdAa4zyfT-kE62pVnMqUpSZamNJ?usp=sharing

## row to run
run local:
1- download the branch
2- npm install for the dependencies
3- remove: .removeThisPart from .env.removeThisPart
4- execute: npm run ui-challenge-workflow-tests in the command line
5- execute: npm run allure-report

run remote:
1- open https://github.com/leonardojorente/sports-club-management-system/actions/workflows/playwright.yml
2- click run workflow
3- select prod env
4- execute
5- the report will be generated here: https://leonardojorente.github.io/sports-club-management-system/




