import Validator from '../validator.js';

type Message<Type> = Type extends Validator<
    any,
    any,
    any,
    any,
    infer As
> ? As : never;

export default Message;
