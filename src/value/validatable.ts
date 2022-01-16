import Value from "@alirya/value/value";
import BaseValidatable from "@alirya/validatable/validatable";

/**
 * extended {@see ValidatableInterface} with added {@see Message}
 * and {@see Value} for {@see Validator} result
 */
export default interface Validatable<
    Base = unknown,
    Boolean extends boolean = boolean
> extends Value<Base>, BaseValidatable<Boolean> {

}
