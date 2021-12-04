import Value from "@dikac/t-value/value";
import BaseValidatable from "@dikac/t-validatable/validatable";

/**
 * extended {@see ValidatableInterface} with added {@see Message}
 * and {@see Value} for {@see Validator} result
 */
export default interface Validatable<
    Base = unknown,
    Boolean extends boolean = boolean
> extends Value<Base>, BaseValidatable<Boolean> {

}
