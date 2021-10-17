import Validator from "../validator";
import AmbiguousInterface from "./unambiguous";

type InferUnambiguous<ValidatorType> = ValidatorType extends Validator<
    infer Allow,
    infer Expectation,
    infer Allowed,
    infer Expected,
    infer Validatable
> ? AmbiguousInterface<Allow, Allow, Expectation, Allowed, Expected, Validatable> : never;

export default InferUnambiguous;
