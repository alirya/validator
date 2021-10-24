import ValidatableInvalid from "@dikac/t-validatable/error/invalid";
import New from "@dikac/t-function/new";
export default InvalidStringMessage;
var InvalidStringMessage;
(function (InvalidStringMessage) {
    InvalidStringMessage.Parameter = InvalidStringMessageParameter;
    InvalidStringMessage.Object = InvalidStringMessageObject;
})(InvalidStringMessage || (InvalidStringMessage = {}));
const defaultError = New(ValidatableInvalid.Parameter);
export function InvalidStringMessageObject({ validatable, message = JSON.stringify, error = defaultError, }) {
    return InvalidStringMessageParameter(validatable, message, error);
}
export function InvalidStringMessageParameter(validatable, message = JSON.stringify, error = defaultError) {
    return error(validatable, message(validatable.message));
}
//# sourceMappingURL=invalid-string-message.js.map