import Validator from "../validator";
import Static from "./static";
declare type InferStatic<ValidatorType> = ValidatorType extends Validator<infer Allow, infer Expectation, infer Allowed, infer Expected, infer Validatable> ? Static<Allow, Allow, Expectation, Allowed, Expected, Validatable> : never;
export default InferStatic;
