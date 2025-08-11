import validator from "email-validator"

class Validator {
  static validateEmail(email: string): boolean {
    return validator.validate(email)
  }
}
export default Validator
