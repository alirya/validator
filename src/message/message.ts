import Validator from '../validator';

type Message<Type> = Type extends Validator<
    any,
    any,
    any,
    any,
    infer As
> ? As : never;

export default Message;
