import Value from '@axiona/value/value.js';
import BaseValidatable from '@axiona/validatable/validatable.js';

/**
 * extended {@see ValidatableInterface} with added {@see Message}
 * and {@see Value} for {@see Validator} result
 */
export type Validatable<
    Base = unknown,
    Boolean extends boolean = boolean,
    Context extends object = {}
> = Readonly<Value<Base> & BaseValidatable<Boolean> & Context>;

export default Validatable;
