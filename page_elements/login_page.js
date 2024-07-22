class LoginPage {
    constructor(page) {
        this.page = page
        this.username_txtbox = page.locator('#user-name')
        this.password_txtbox = page.locator('//input[@name="password"]')
        this.login_btn = page.locator('[id="login-button"]')
    }

    async goToLoginPage(){
        await this.page.goto('https://www.saucedemo.com/v1/')
    }

    async login(username, password){
        await this.username_txtbox.fill(username)
        await this.password_txtbox.fill(password)
        await this.login_btn.click()
    }
}

export default LoginPage ;