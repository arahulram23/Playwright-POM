import { test, expect } from '@playwright/test'
import  LoginPage  from '../page_elements/login_page'

test('login test standard user', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goToLoginPage()
    await loginPage.login('standard_user','secret_sauce')
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
    await loginPage.clickBag()  
})


test('login test locked user', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goToLoginPage()
    await loginPage.login('locked_out_user','secret_sauce')
    await loginPage.clickBag()  
  
})

test('login test problem user', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goToLoginPage()
    await loginPage.login('problem_user','secret_sauce')  
    
})
test('login test performance glitch user', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goToLoginPage()
    await loginPage.login('performance_glitch_user','secret_sauce') 
    
})
test('login test invalid user', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goToLoginPage()
    await loginPage.login('invalid_user','secret_sauce')  
    
})