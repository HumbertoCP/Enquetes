import { badRequest } from './../helpers/http-helper';
import { MissingParamError } from '../errors/missing-param-error'
import { InvalidParamError } from '../errors/invalid-param-error';
import { httpRequest, httpResponse } from '../protocols/http'
import { Controller} from '../protocols/controller'
import { EmailValidator } from '../protocols/email-validator'



export class SignUpController implements Controller {
    private readonly emailValidator: EmailValidator
    constructor (emailValidator: EmailValidator) {
        this.emailValidator = emailValidator
    }
    handle (httpRequest: httpRequest): httpResponse {
        const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
        for (const field of requiredFields) {
            if(!httpRequest.body[field]) {
                return badRequest(new MissingParamError(field))
            }
        }
        const isValid = this.emailValidator.isValid(httpRequest.body.email)
        if(!isValid) {
            return badRequest(new InvalidParamError('email'))
        }
    }
}