import Validatable from './validatable';

type Static<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Message = unknown,
    Context extends object = {},
> =
    Validatable<Expectation, Message, Expected, Context> |
    Validatable<Allow, Message, Allowed, Context>;

export default Static;