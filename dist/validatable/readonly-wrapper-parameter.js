import ReadonlyWrapperParameters from "./readonly-wrapper-parameters";
/**
 * read only wrapper for {@link Message}, {@link Value} and {@link ValidatableInterface}
 */
export default class ReadonlyWrapperObject extends ReadonlyWrapperParameters {
    constructor(validatable) {
        super(validatable, validatable, validatable);
        this.validatable = validatable;
    }
}
//# sourceMappingURL=readonly-wrapper-parameter.js.map