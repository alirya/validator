import ValidationCallback from "./validatable/callback";
export default function CallbackParameters(validation, message) {
    return function (value) {
        return ValidationCallback.Function.Parameters(value, validation, message);
    };
}
//# sourceMappingURL=callback-parameters.js.map