import Dynamic from "../../validatable/dynamic";
import Value from "@dikac/t-value/value";
import ValidatableInterface from "@dikac/t-validatable/validatable";
export declare type DynamicParameter<Base = unknown, MessageType = unknown> = (<Argument extends Base>(value: Argument, valid: boolean) => MessageType);
export declare type DynamicObject<Base = unknown, MessageType = unknown> = <Argument extends Base>(argument: Value<Base> & ValidatableInterface<boolean>) => MessageType;
export declare namespace Dynamic {
    type Parameter<Base = unknown, MessageType = unknown> = DynamicParameter<Base, MessageType>;
    type Object<Base = unknown, MessageType = unknown> = DynamicObject<Base, MessageType>;
}
export default Dynamic;
