import ValidationCallback from "./validatable/callback";
export default function CallbackParameter({ validation, message }) {
    return function (value) {
        return ValidationCallback.Function.Parameter({ value, validation, message });
    };
}
//# sourceMappingURL=callback-parameter.js.map