import SimpleReturn from "../../validatable/simple";
import Dynamic from "../../validatable/dynamic";
import Value from "@dikac/t-value/value";
import ValidatableInterface from "@dikac/t-validatable/validatable";

export type DynamicParameter<
    Base = unknown,
    MessageType = unknown
> =
    (<Argument extends Base>(value: Argument, valid: boolean) => MessageType);

export type DynamicObject<
    Base = unknown,
    MessageType = unknown
> =
    <Argument extends Base>(argument: Value<Base> & ValidatableInterface<boolean>) => MessageType

export namespace Dynamic {

    export type Parameter<
        Base = unknown,
        MessageType = unknown
        > = DynamicParameter<Base, MessageType>;

    export type Object<
        Base = unknown,
        MessageType = unknown
        > = DynamicObject<Base, MessageType>;
}


export default Dynamic;
