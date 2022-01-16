import Validator from '../validator';

type InferValidatable<Type> = Type extends Validator<any, any, any, any, infer As> ? As : never;

export default InferValidatable;
