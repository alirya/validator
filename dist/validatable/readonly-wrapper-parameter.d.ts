import Validatable from "./validatable";
import ReadonlyWrapperParameters from "./readonly-wrapper-parameters";
/**
 * read only wrapper for {@link Message}, {@link Value} and {@link ValidatableInterface}
 */
export default class ReadonlyWrapperObject<ValidatableType extends Validatable> extends ReadonlyWrapperParameters<ValidatableType, ValidatableType, ValidatableType> {
    validatable: ValidatableType;
    constructor(validatable: ValidatableType);
}
