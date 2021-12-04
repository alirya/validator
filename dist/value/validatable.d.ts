import Value from "@dikac/t-value/value";
import BaseValidatable from "@dikac/t-validatable/validatable";
/**
 * extended {@see ValidatableInterface} with added {@see Message}
 * and {@see Value} for {@see Validator} result
 */
declare type Validatable<Base = unknown, Boolean extends boolean = boolean> = Value<Base> & BaseValidatable<Boolean>;
export default Validatable;
