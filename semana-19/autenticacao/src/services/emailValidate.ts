import * as EmailValidator from 'email-validator';


export class EmailValidate {

    validadeEmail = (email: string): boolean => {
        return EmailValidator.validate(email);
    }
}