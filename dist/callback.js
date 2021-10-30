import ValidationCallback from "./validatable/callback";
/**
 * create {@see Validator} from multiple callback
 */
export default Callback;
var Callback;
(function (Callback) {
    Callback.Object = CallbackObject;
    Callback.Parameter = CallbackParameter;
})(Callback || (Callback = {}));
export function CallbackObject({ validation, message }) {
    return CallbackParameter(validation, message);
}
export function CallbackParameter(validation, message) {
    return function (value) {
        return new ValidationCallback.Class.Parameter(value, validation, message);
    };
}
//# sourceMappingURL=callback.js.map