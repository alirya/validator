import ValueInfer from "@dikac/t-value/value/infer";
import ReadonlyWrapper from "./readonly-wrapper";
import Dynamic from "./dynamic";
import InvalidStringMessage from "./error/invalid-string-message";
import Value from "@dikac/t-value/value";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";

type KeepImport = Value;

/**
 * @inheritDoc {@link ReadonlyWrapper}
 *
 * throw exception when {@link Dynamic} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Asserted<
    ValidatableType extends Dynamic = Dynamic
> extends ReadonlyWrapper.Parameter<
    ValidatableType
> {
    /**
     * @param validatable
     * @param error
     */
    constructor(
        validatable : ValidatableType,
        public error : (validatable: ValidatableContainer<ValidatableType>)=>Error = InvalidStringMessage.Parameter
    ) {

        super(validatable);
    }

    get value() : ValueInfer<ValidatableType> {

        if(!this.valid) {

            throw this.error(this);
        }

        return <ValueInfer<ValidatableType>> this.validatable.value;
    }
}
