import Value from "@dikac/t-value/value";
import ValidatableInterface from "@dikac/t-validatable/validatable";
export declare type DynamicParameter<Base = unknown, MessageType = unknown> = <Argument extends Base>(argument: Value<Base> & ValidatableInterface<boolean>) => MessageType;
export default DynamicParameter;
