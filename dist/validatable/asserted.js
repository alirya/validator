import ReadonlyWrapper from "./readonly-wrapper";
import InvalidStringMessage from "./error/invalid-string-message";
/**
 * @inheritDoc {@link ReadonlyWrapper}
 *
 * throw exception when {@link Validatable} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Asserted extends ReadonlyWrapper.Parameter {
    /**
     * @param validatable
     * @param error
     */
    constructor(validatable, error = InvalidStringMessage.Parameter) {
        super(validatable);
        this.error = error;
    }
    get value() {
        if (!this.valid) {
            throw this.error(this);
        }
        return this.validatable.value;
    }
}
//# sourceMappingURL=asserted.js.map