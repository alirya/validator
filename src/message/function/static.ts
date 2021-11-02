import SimpleReturn from "../../validatable/simple";
import StaticReturn from "../../validatable/static";
import Dynamic from "../../validatable/dynamic";
import Value from "@dikac/t-value/value";
import ValidatableInterface from "@dikac/t-validatable/validatable";

export type StaticParameter<
    Allow = unknown,
    Argument extends Allow = Allow,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown
> =
    (<Value extends Argument>(value: Value, valid: Allowed) => MessageType) |
    (<Value extends Expectation>(value: Value, valid: Expected) => MessageType);

export type StaticObject<
    Allow = unknown,
    Argument extends Allow = Allow,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
> =
    <Value extends Argument>(argument: Omit<StaticReturn<Allow, Value, Expectation, Allowed, Expected, Readonly<Dynamic<Allow, MessageType>>>, 'message'>) => MessageType;

export namespace Static {

    export type Parameter<
        Allow = unknown,
        Argument extends Allow = Allow,
        Expectation extends Allow = Allow,
        Allowed extends boolean = boolean,
        Expected extends boolean = boolean,
        MessageType = unknown
        > = StaticParameter<Allow, Argument, Expectation, Allowed, Expected, MessageType>;

    export type Object<
        Allow = unknown,
        Argument extends Allow = Allow,
        Expectation extends Allow = Allow,
        Allowed extends boolean = boolean,
        Expected extends boolean = boolean,
        MessageType = unknown
        > = StaticObject<Allow, Argument, Expectation, Allowed, Expected, MessageType>;
}

export default Static;
