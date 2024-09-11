import { expect } from '@playwright/test'

export class DeleteUser {

    constructor(page) {

        this.page = page
        this.settingsBtn = "//h4[text()='SETTINGS']"
        this.userAccessBtn = "//h3[text()='User Access']"
        this.userNames = "//tbody[@role='rowgroup']"
    }

    async deleteUser() {

        await this.page.locator(this.settingsBtn).click()
        await this.page.locator(this.userAccessBtn).click()
        await this.page.locator("(//div[contains(@class,'sc-fxwrCY fPVJke')]//div)[1]").click()
        await this.page.locator("//div[text()='100']").click()

        const listOfUsers = "//table[@role='table']"

        while (true) {
            const rows = await this.page.locator(listOfUsers).elementHandles();
            if (rows.length === 0) {
                break;
            }
            foundMatchingUsers = false
            for (let i = count - 1 ; i >= 0; i--){
                const getUser = await this.page.locator(listOfUsers).nth(i).locator(this.userNames).textContent()
                console.log(getUser);
                
            }
            await this.page.pause(5000)
        }




    }

}