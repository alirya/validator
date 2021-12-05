import Validator from "../validator";
declare type Expectation<Type> = Type extends Validator<any, infer As> ? As : never;
export default Expectation;
