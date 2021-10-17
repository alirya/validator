import ValidationCallback from "./validatable/callback";
export default function Callback(validation, message) {
    return function (value) {
        return ValidationCallback(value, validation, message);
    };
}
//# sourceMappingURL=callback.js.map