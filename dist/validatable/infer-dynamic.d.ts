import Validator from "../validator";
declare type InferDynamic<Type> = Type extends Validator<any, any, any, any, infer As> ? As : never;
export default InferDynamic;
