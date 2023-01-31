import Validator from '../validator';

type InferValidator<Type> = Type extends Validator<
    any,
    any,
    any,
    any,
    any,
    infer As
> ? As : never;

export default InferValidator;
