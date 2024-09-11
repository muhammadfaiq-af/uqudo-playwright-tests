import test from '../../fixture/fixture'

test('Verify that the user is able to login with valid credientials', async ({ Login }) => {

  await Login.loginSuccess()

})

test('Verify that the user is not able to login with Invalid Credientials', async ({ Login }) =>{

  await Login.loginUnsuccessfull()

})

test('Verify that the user is able to logout from the website', async ({ Login })=> {

  await Login.logout()
})