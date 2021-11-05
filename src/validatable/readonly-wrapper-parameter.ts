import Dynamic from "./dynamic";
import ReadonlyWrapperParameters from "./readonly-wrapper-parameters";

/**
 * read only wrapper for {@link Message}, {@link Value} and {@link ValidatableInterface}
 */

export default class ReadonlyWrapperObject<
    ValidatableType extends Dynamic
> extends ReadonlyWrapperParameters<ValidatableType, ValidatableType, ValidatableType>{

    constructor(public validatable : ValidatableType) {

        super(validatable, validatable, validatable)
    }
}


