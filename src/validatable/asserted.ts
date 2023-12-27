import ValueInfer from '@axiona/value/value/infer.js';
import ReadonlyWrapper from './readonly-wrapper.js';
import Validatable from './validatable.js';
import InvalidStringMessage from './error/invalid-string-message.js';
import Value from '@axiona/value/value.js';
import ValidatableContainer from '@axiona/validatable/validatable/validatable.js';

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
