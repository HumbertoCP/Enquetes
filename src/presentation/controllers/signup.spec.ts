import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-parram-error'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const HttpResponse = sut.handle(httRequest)
    expect(HttpResponse.statusCode).toBe(400)
    expect(HttpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 400 if no email is provided', () => {
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
    expect(HttpResponse.body).toEqual(new MissingParamError('email'))
  })
})
