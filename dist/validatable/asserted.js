import ReadonlyWrapper from "./readonly-wrapper";
import InvalidStringMessage from "./error/invalid-string-message";
/**
 * @inheritDoc {@link ReadonlyWrapper}
 *
 * throw exception when {@link Validatable} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Asserted extends ReadonlyWrapper {
    /**
     * @param subject
     * @param error
     */
    constructor(subject, error = InvalidStringMessage) {
        super(subject);
        this.error = error;
    }
    get value() {
        if (!this.valid) {
            throw this.error(this.subject);
        }
        return this.subject.value;
    }
}
//# sourceMappingURL=asserted.js.map