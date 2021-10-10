import ValueInfer from "@dikac/t-value/value/infer";
import ReadonlyWrapper from "./readonly-wrapper";
import Validatable from "./validatable";
import InvalidStringMessage from "./error/invalid-string-message";
import Value from "@dikac/t-value/value";

type KeepImport = Value;

/**
 * @inheritDoc {@link ReadonlyWrapper}
 *
 * throw exception when {@link Validatable} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Asserted<
    ValidatableType extends Validatable = Validatable
> extends ReadonlyWrapper<
    ValidatableType
> {
    /**
     * @param subject
     * @param error
     */
    constructor(
        subject : ValidatableType,
        public error : (result:ValidatableType)=>Error = InvalidStringMessage
    ) {

        super(subject);
    }

    get value() : ValueInfer<ValidatableType> {

        if(!this.valid) {

            throw this.error(this.subject);
        }

        return <ValueInfer<ValidatableType>> this.subject.value;
    }
}
