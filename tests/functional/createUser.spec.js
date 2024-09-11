import test from '../../fixture/fixture'

test('Verify that the user is able to access the web sdk by Portal', async ({Login, CreateUser}) =>{

    await Login.loginSuccess()
    await CreateUser.createUser()

});