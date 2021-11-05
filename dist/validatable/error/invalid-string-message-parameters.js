import ValidatableInvalid from "@dikac/t-validatable/error/invalid";
import New from "@dikac/t-function/new";
const defaultError = New(ValidatableInvalid.Parameter);
export default function InvalidStringMessageParameters(validatable, message = JSON.stringify, error = defaultError) {
    return error(validatable, message(validatable.message));
}
//# sourceMappingURL=invalid-string-message-parameters.js.map