import { expect } from '@playwright/test'

export class CreateUser {

    constructor(page) {
        this.page = page;
        this.settingsBtn = "//h4[text()='SETTINGS']"
        this.userAccessBtn = "//h3[text()='User Access']"
        this.createUserBtn = "//h3[text()='Create user']"
        this.firstName = "input[name='firstName']"
        this.lastName = "input[name='lastName']"
        this.email = "input[name='email']"
        this.roleDropdown = ".sc-aXZVg.sc-kuVLHQ.fQKjhk.knieFi"
        this.selectedRole = "div.css-10wo9uf-option:nth-child(3)"
        this.createBtn = "//h3[text()='Create']"
        this.assertValidation = "//div[text()='User created successfully']" 
    }


    async createUser() {
        const originalEmail = "1t.aamer@gmail.com";
        const randomNumber = Math.floor(Math.random() * 9000) + 1000;
        const modifiedEmail = originalEmail.replace("@", `+${randomNumber}@`);

        await this.page.locator(this.settingsBtn).click()
        await this.page.locator(this.userAccessBtn).click()
        await this.page.locator(this.createUserBtn).click()
        await this.page.locator(this.firstName).type('Taimur')
        await this.page.locator(this.lastName).type('Aamer')
        await this.page.locator(this.email).type(modifiedEmail)
       
        await this.page.locator(this.roleDropdown).click(),
        await this.page.locator(this.selectedRole).click()
        await this.page.locator(this.createBtn).click()
        await this.page.waitForLoadState('networkidle')
        await expect(this.page.locator(this.assertValidation)).toHaveText('User created successfully')

        //Ctrl Shift P > emulate a focused page
    }
}