import ValidatableInvalid from "@dikac/t-validatable/error/invalid";
const defaultError = (validatable, message) => new ValidatableInvalid(validatable, message);
/**
 * @param validatable
 *
 * @param message
 * message conversion
 * default : {@see JSON.stringify}
 *
 * @param error
 * error object factory
 * default : {@see ValidatableInvalid}
 */
export default function InvalidStringMessage(validatable, message = JSON.stringify, error = defaultError) {
    return error(validatable, message(validatable.message));
}
//# sourceMappingURL=invalid-string-message.js.map