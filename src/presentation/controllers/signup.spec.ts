import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name ins provided', () => {
    const sut = new SignUpController()
    const httRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const HttpResponse = sut.handle(httRequest)
    expect(HttpResponse.statusCode).toBe(400)
    expect(HttpResponse.body).toEqual(new Error('Missing param: email'))
  })
})
