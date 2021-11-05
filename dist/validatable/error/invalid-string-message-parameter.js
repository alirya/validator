import ValidatableInvalid from "@dikac/t-validatable/error/invalid";
import New from "@dikac/t-function/new";
import InvalidStringMessageParameters from "./invalid-string-message-parameters";
const defaultError = New(ValidatableInvalid.Parameter);
export default function InvalidStringMessageParameter({ validatable, message, error, }) {
    return InvalidStringMessageParameters(validatable, message, error);
}
//# sourceMappingURL=invalid-string-message-parameter.js.map