import Dynamic from './validatable';

type Static<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Context extends object = {},
> =
    Dynamic<Expectation, Expected, Context> |
    Dynamic<Allow, Allowed, Context>
;

export default Static;
