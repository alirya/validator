import ValidatableInvalid from "@dikac/t-validatable/error/invalid";
const defaultError = (validatable, message) => new ValidatableInvalid(validatable, message);
export default function InvalidStringMessage({ validatable, message = JSON.stringify, error = defaultError, }) {
    return error(validatable, message(validatable.message));
}
//# sourceMappingURL=invalid-string-message.js.map