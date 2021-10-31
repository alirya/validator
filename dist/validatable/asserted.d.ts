import ValueInfer from "@dikac/t-value/value/infer";
import ReadonlyWrapper from "./readonly-wrapper";
import Dynamic from "./dynamic";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
/**
 * @inheritDoc {@link ReadonlyWrapper}
 *
 * throw exception when {@link Dynamic} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Asserted<ValidatableType extends Dynamic = Dynamic> extends ReadonlyWrapper.Object<ValidatableType> {
    error: (validatable: ValidatableContainer<ValidatableType>) => Error;
    /**
     * @param validatable
     * @param error
     */
    constructor(validatable: ValidatableType, error?: (validatable: ValidatableContainer<ValidatableType>) => Error);
    get value(): ValueInfer<ValidatableType>;
}
