import test from '../../fixture/fixture'

test('Verify that the user is able to delete the user', async ({Login, DeleteUser}) =>{

    await Login.loginSuccess()
    await DeleteUser.deleteUser()
})