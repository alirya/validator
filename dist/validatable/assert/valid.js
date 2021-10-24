import InvalidStringMessage from "../error/invalid-string-message";
/**
 * Throw exception if given value is not {@link InvalidStringMessage} type
 */
export default function Valid(value, error = InvalidStringMessage.Parameter) {
    if (!value.valid) {
        throw error(value);
    }
}
//# sourceMappingURL=valid.js.map