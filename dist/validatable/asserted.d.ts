import ValueInfer from "@dikac/t-value/value/infer";
import ReadonlyWrapper from "./readonly-wrapper";
import Validatable from "./validatable";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
/**
 * @inheritDoc {@link ReadonlyWrapper}
 *
 * throw exception when {@link Validatable} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Asserted<ValidatableType extends Validatable = Validatable> extends ReadonlyWrapper.Object<ValidatableType> {
    error: (validatable: ValidatableContainer<ValidatableType>) => Error;
    /**
     * @param validatable
     * @param error
     */
    constructor(validatable: ValidatableType, error?: (validatable: ValidatableContainer<ValidatableType>) => Error);
    get value(): ValueInfer<ValidatableType>;
}
