import ValidatableInvalid from "@dikac/t-validatable/error/invalid-parameters";
import New from "@dikac/t-function/new";
export default function InvalidStringMessageParameters(validatable, message = JSON.stringify, error = New(ValidatableInvalid)) {
    return error(validatable, message(validatable.message));
}
//# sourceMappingURL=invalid-string-message-parameters.js.map