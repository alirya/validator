import ValidationCallback from "./validatable/callback-function-parameters";
export default function CallbackParameters(validation, message) {
    return function (value) {
        return ValidationCallback(value, validation, message);
    };
}
//# sourceMappingURL=callback-parameters.js.map