// @ts-check
const { test, expect } = require('@playwright/test');

test('Test 1: Check visibility of elements on Reqres', async({page}) => {
    await page.goto('https://reqres.in/');
  
    const title =   page.getByText('Test your front-end against a real API');
    expect (await title.isVisible()).toBeTruthy();
 
    const oneCircleWithData =  page.getByText('Always-on')
    expect (await oneCircleWithData.isVisible).toBeTruthy();
  });

  test('Test 2: Check visibility of elements on Reqres', async({page}) => {
    await page.goto('https://reqres.in/');
  
    const supportButton =   page.getByRole('button', { name: 'Support ReqRes' }).first();
    expect (await supportButton.isVisible()).toBeTruthy();
    supportButton.click;

    const supportTitle =  page.locator('//*[@id="support-heading"]')
    expect (await supportTitle.isVisible).toBeTruthy();
  });

  test('Test 3: Check visibility of elements on Reqres (get List of users)', async({page}) => {
    await page.goto('https://reqres.in/');
  
    const getListOfUsers =   page.locator('//*[@id="console"]/div[1]/ul/li[1]');
    expect (await getListOfUsers.isVisible()).toBeTruthy();
    getListOfUsers.click;

const apiRequestForGetListOfUsers = page.getByText('/api/users?page=2');
expect(await getListOfUsers.isVisible).toBeTruthy();
  });