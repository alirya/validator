import Validator from "../validator";
import AmbiguousInterface from "./unambiguous";
declare type InferUnambiguous<ValidatorType> = ValidatorType extends Validator<infer Base, infer Type, infer Ambiguous, infer Match, infer Validatable> ? AmbiguousInterface<Base, Base, Type, Ambiguous, Match, Validatable> : never;
export default InferUnambiguous;
