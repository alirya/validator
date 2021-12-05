import Validator from "../validator";
declare type Allow<Type> = Type extends Validator<infer As> ? As : never;
export default Allow;
