import SimpleReturn from "../../validatable/simple";
import Dynamic from "../../validatable/dynamic";
import Value from "@dikac/t-value/value";
import ValidatableInterface from "@dikac/t-validatable/validatable";

export type SimpleParameter<
    Allow = unknown,
    Expectation extends Allow = Allow,
    MessageType = unknown
> =
    (<Value extends Allow>(value: Value, valid: false) => MessageType) |
    (<Value extends Expectation>(value: Value, valid: true) => MessageType);

export type SimpleObject<
    Allow = unknown,
    Expectation extends Allow = Allow,
    MessageType = unknown,
> =
    <Value extends Allow>(argument: Omit<SimpleReturn<Allow, Value, Expectation, Readonly<Dynamic<Allow, MessageType>>>, 'message'>) => MessageType;

export namespace Simple {

    export type Parameter<
        Allow = unknown,
        Expectation extends Allow = Allow,
        MessageType = unknown
        > = SimpleParameter<Allow, Expectation, MessageType>;

    export type Object<
        Allow = unknown,
        Expectation extends Allow = Allow,
        MessageType = unknown
        > = SimpleObject<Allow, Expectation, MessageType>;
}

export default Simple;
