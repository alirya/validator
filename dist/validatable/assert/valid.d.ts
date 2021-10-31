import Dynamic from "../dynamic";
/**
 * Throw exception if given value is not {@link InvalidStringMessage} type
 */
export default function Valid<Argument extends Dynamic = Dynamic>(value: Argument, error?: (validatable: Argument) => Error): asserts value is Argument;
