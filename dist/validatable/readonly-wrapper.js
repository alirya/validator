/**
 * read only wrapper for {@link Message}, {@link Value} and {@link ValidatableInterface}
 */
export default class ReadonlyWrapper {
    constructor(validatable) {
        this.validatable = validatable;
    }
    get valid() {
        return this.validatable.valid;
    }
    get message() {
        return this.validatable.message;
    }
    get value() {
        return this.validatable.value;
    }
}
//# sourceMappingURL=readonly-wrapper.js.map