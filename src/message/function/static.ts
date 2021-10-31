import SimpleReturn from "../../validatable/simple";
import Dynamic from "../../validatable/dynamic";
import Value from "@dikac/t-value/value";
import ValidatableInterface from "@dikac/t-validatable/validatable";

export type StaticParameter<
    Base = unknown,
    Type extends Base = Base,
    MessageType = unknown
> =
    (<Argument extends Base>(value: Argument, valid: false) => MessageType) |
    (<Argument extends Type>(value: Argument, valid: true) => MessageType);

export type StaticObject<
    Base = unknown,
    Type extends Base = Base,
    MessageType = unknown
> =
    <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Dynamic<Base, MessageType>>>, 'message'>) => MessageType;

export namespace Static {

    export type Parameter<
        Base = unknown,
        Type extends Base = Base,
        MessageType = unknown
        > = StaticParameter<Base, Type, MessageType>;

    export type Object<
        Base = unknown,
        Type extends Base = Base,
        MessageType = unknown
        > = StaticObject<Base, Type, MessageType>;
}

export default Static;
