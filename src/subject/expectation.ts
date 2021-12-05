import Validator from "../validator";

type Expectation<Type> = Type extends Validator<any, infer As> ? As : never;

export default Expectation;
