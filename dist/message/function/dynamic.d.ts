import Value from "@dikac/t-value/value";
import ValidatableInterface from "@dikac/t-validatable/validatable";
export declare type DynamicParameter<Base = unknown, MessageType = unknown, ExtraArgument extends unknown[] = unknown[]> = (<Argument extends Base>(value: Argument, valid: boolean, ...extra: ExtraArgument[]) => MessageType);
export declare type DynamicObject<Base = unknown, MessageType = unknown> = <Argument extends Base>(argument: Value<Base> & ValidatableInterface<boolean>) => MessageType;
export declare namespace Dynamic {
    type Parameter<Base = unknown, MessageType = unknown, ExtraArgument extends unknown[] = unknown[]> = DynamicParameter<Base, MessageType, ExtraArgument>;
    type Object<Base = unknown, MessageType = unknown> = DynamicObject<Base, MessageType>;
}
export default Dynamic;
