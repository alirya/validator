import InvalidStringMessageParameter from "./invalid-string-message-parameter";
import InvalidStringMessageParameters from "./invalid-string-message-parameters";
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
var InvalidStringMessage;
(function (InvalidStringMessage) {
    InvalidStringMessage.Parameter = InvalidStringMessageParameter;
    InvalidStringMessage.Parameters = InvalidStringMessageParameters;
})(InvalidStringMessage || (InvalidStringMessage = {}));
export default InvalidStringMessage;
//# sourceMappingURL=invalid-string-message.js.map