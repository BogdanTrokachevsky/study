// @ts-check
const { test, expect } = require('@playwright/test');



test('Test 1: Check visibility of elements on Amazon homepage', async({page}) => {
  await page.goto('https://www.amazon.com/');

  const searchInput =   page.getByRole('search');
  expect (await searchInput.isVisible()).toBeTruthy();

  const amazonLogo =  page.locator('a.nav-logo-link');
  expect(await amazonLogo.isVisible()).toBeTruthy();


  const signInButton =  page.locator('#nav-link-accountList');
  expect(await signInButton.isVisible()).toBeTruthy();
});

test('Test 2: Check visibility of elements on Amazon homepage', async({page})=> {
  await page.goto('https://www.amazon.com/');
  
  const customerServiceButton =  page.getByText('Customer Service');
  expect(await customerServiceButton.isVisible()).toBeTruthy();

  const registryButton =  page.getByText('Gift Cards')
  expect(await registryButton.isVisible()).toBeTruthy();

  const cartButton =  page.locator('#nav-cart');
  expect(await cartButton.isVisible()).toBeTruthy();
})

test('Test 3: Check visibility of elements on Amazon homepage',async({page})=> {

await page.goto('https://www.amazon.com/')

const menuButtom = page.getByLabel('Open Menu')
expect(await  menuButtom.isVisible()).toBeTruthy();

menuButtom.isEnabled();
menuButtom.click();

const smartHomeMenuCategoty = page.getByText('Smart Home')
smartHomeMenuCategoty.waitFor
expect (await smartHomeMenuCategoty.isVisible()).toBeTruthy();

const computerHomeMenuCategoty  = page.getByText('Amazon Appstore')
expect (await computerHomeMenuCategoty.isVisible()).toBeTruthy;

const musicLinkLocator  = page.getByText('Amazon Music')
expect (await musicLinkLocator.isVisible()).toBeTruthy();

const fashionLinkLocator = page.getByText('Hello, sign in');
expect (await fashionLinkLocator.isVisible()).toBeTruthy();

})

test ('Test 4: Check visibility of elements on Amazon homepage', async({page}) => {
 
await page.goto('https://www.amazon.com/')

const gamingAccessories  = page.getByText('Gaming accessories')
expect (await gamingAccessories.isVisible()).toBeTruthy();


const pcCategory = page.getByText('Deals in PCs');
expect (await pcCategory.isVisible()).toBeTruthy();

const newYearCategory = page.getByText('New year, new supplies');
expect (await newYearCategory.isVisible()).toBeTruthy();
})


test ('Test 5: Check visibility of elements on Amazon homepage', async({page})=> {

  await page.goto('https://www.amazon.com/')
  
const todaysDeals = page.getByText('Cart');
expect (await todaysDeals.isVisible).toBeTruthy();

await todaysDeals.click({force : true});

await expect(page).toHaveTitle(/.*Shopping */)

//await expect(page).toHaveURL(/.*gift-cards*/);


})
