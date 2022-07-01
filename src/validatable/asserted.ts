import ValueInfer from '@alirya/value/value/infer';
import ReadonlyWrapper from './readonly-wrapper';
import Validatable from './validatable';
import InvalidStringMessage from './error/invalid-string-message';
import Value from '@alirya/value/value';
import ValidatableContainer from '@alirya/validatable/validatable/validatable';

type KeepImport = Value;

/**
 * @inheritDoc {@link ReadonlyWrapper}
 *
 * throw exception when {@link Validatable} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Asserted<
    ValidatableType extends Validatable = Validatable
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
