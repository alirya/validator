import ValidationCallback from "./validatable/callback";
export function CallbackObject({ validation, message }) {
    return function (value) {
        return ValidationCallback.Function.Object({ value, validation, message });
    };
}
export function CallbackParameter(validation, message) {
    return function (value) {
        return ValidationCallback.Function.Parameter(value, validation, message);
    };
}
var Callback;
(function (Callback) {
    Callback.Object = CallbackObject;
    Callback.Parameter = CallbackParameter;
})(Callback || (Callback = {}));
export default Callback;
//# sourceMappingURL=callback.js.map