import { expect } from '@playwright/test'

export class Login{

    constructor(page){

        this.page = page;
        this.customerPortalassert = "//h1[@class='sc-dLMFU iuMXtR']"
        this.signBtn = "//button[text()='Sign In']"
        this.username = "#username"
        this.password =  "#password"
        this.continueBtn = "//button[text()='Continue']"
        this.validation = '#error-element-password'
        this.btnLogout = "//h3[text()='Log Out']"
        this.logoutValidation = "//h3[@class='sc-eldPxv hUqJCY']"

    }

    async gotoLogin(){
        await this.page.goto('/login')
        await expect(this.page.locator(this.customerPortalassert)).toHaveText('Customer Portal')
        await this.page.locator(this.signBtn).click()
    }

    async loginSuccess(){

        await this.page.goto('/login')
        await this.page.locator(this.signBtn).click()
        await this.page.locator(this.username).type('1t.aamer@gmail.com')
        await this.page.locator(this.password).type('Admin@1234')
        await this.page.locator(this.continueBtn).click()
        
    }

    async loginUnsuccessfull(){

        await this.page.goto('/login')
        await this.page.locator(this.signBtn).click()
        await this.page.locator(this.username).type('1t.aamer1@gmail.com')
        await this.page.locator(this.password).type('1232')
        await this.page.locator(this.continueBtn).click()
        await expect(this.page.locator(this.validation)).toHaveText('Wrong email or password')
    }

    async logout(){

        await this.loginSuccess();
        await this.page.locator(this.btnLogout).click()
        await this.page.waitForTimeout(2000)
        await expect(this.page.locator(this.logoutValidation)).toHaveText('User logged out successfully')

    }

}