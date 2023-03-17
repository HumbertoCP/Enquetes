import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name ins provided', () => {
    const sut = new SignUpController()
    const httRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const HttpResponse = sut.handle(httRequest)
    expect(HttpResponse.statusCode).toBe(400)
  })
})
