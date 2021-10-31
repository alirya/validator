import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * extended {@see ValidatableInterface} with added {@see Message}
 * and {@see Value} for {@see Validator} result
 */
declare type Dynamic<Base = unknown, Boolean extends boolean = boolean> = Value<Base> & Validatable<Boolean>;
export default Dynamic;
