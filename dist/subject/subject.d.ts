import Validator from "../validator";
declare type Expectation<Type> = Type extends Validator<infer Allow, infer Expectation> ? Allow | Expectation : never;
export default Expectation;
