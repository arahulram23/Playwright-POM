import { test, expect } from '@playwright/test'
import  LoginPage  from '../page_elements/login_page'

test('myfirst test', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goToLoginPage()
    await loginPage.login('standard_user','secret_user')

})