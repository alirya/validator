import ValidationCallback from "./validatable/callback-function-parameters";
export default function CallbackParameters(validation, message, argument = []) {
    return function (value) {
        return ValidationCallback(value, validation, message, argument);
    };
}
//# sourceMappingURL=callback-parameters.js.map