import {test as baseTest} from '@playwright/test'
import {Login} from '../pageFactory/common'
import { CreateUser } from '../pageFactory/createUser'
import { DeleteUser } from '../pageFactory/deleteUser'


const test = baseTest.extend({

    Login: async ({page}, use) =>{
        await use(new Login(page))
    },

    CreateUser: async ({page}, use) =>{
        await use(new CreateUser(page))
    },

    DeleteUser: async ({page}, use) =>{
        await use(new DeleteUser(page))
    }
})
export default test;