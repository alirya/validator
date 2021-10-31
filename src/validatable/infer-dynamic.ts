import Validator from "../validator";

type InferDynamic<Type> = Type extends Validator<any, any, any, any, infer As> ? As : never;

export default InferDynamic;
