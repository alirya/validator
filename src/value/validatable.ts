import Value from '@alirya/value/value';
import BaseValidatable from '@alirya/validatable/validatable';

/**
 * extended {@see ValidatableInterface} with added {@see Message}
 * and {@see Value} for {@see Validator} result
 */
export type Validatable<
    Base = unknown,
    Boolean extends boolean = boolean,
    Context extends object = {}
> = Value<Base> & BaseValidatable<Boolean> & Context;

export default Validatable;
