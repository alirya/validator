import Value from "@dikac/t-value/value";
import BaseValidatable from "@dikac/t-validatable/validatable";
import Validatable from "./validatable";
import Message from "@dikac/t-message/message";
import Validation from "@dikac/t-boolean/validation/validation";
import Guard from "@dikac/t-boolean/validation/guard";
import Return from "./simple";
import StrictOmit from "@dikac/t-object/strict-omit";
/**
 * assemble {@see Validatable} from value,
 * callback validation, and callback message
 *
 * this contain multiple class and function implementation
 *
 * function implementation version offer
 * more accurate type
 */
export default Callback;
/**
 * class type
 */
export interface CallbackType<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> extends Readonly<Validatable<ValueType, MessageType>>, Readonly<Validation<[ValueType], boolean>> {
}
/**
 * class object argument
 */
export declare type CallbackArgument<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> = Readonly<Value<Type> & {
    validation: (value: ValueType) => boolean;
} & Message<(result: Readonly<Value<ValueType> & BaseValidatable<boolean>>) => MessageType>>;
/**
 * main implementation
 *
 */
export declare class CallbackParameter<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> implements CallbackType<ValueType, Type, MessageType> {
    readonly value: Type;
    readonly validation: (value: ValueType) => boolean;
    readonly messageFactory: (result: Readonly<StrictOmit<Validatable<ValueType>, 'message'>>) => MessageType;
    /**
     *
     * @param value
     * value to be validated by {@param validation}
     *
     * @param validation
     *
     * @param messageFactory
     * to generate message
     */
    constructor(value: Type, validation: (value: ValueType) => boolean, messageFactory: (result: Readonly<StrictOmit<Validatable<ValueType>, 'message'>>) => MessageType);
    get valid(): boolean;
    get message(): MessageType;
}
/**
 * destructure argument version
 */
export declare class CallbackObject<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> extends CallbackParameter<ValueType, Type, MessageType> {
    constructor({ value, validation, message, }: CallbackArgument<ValueType, Type, MessageType>);
}
/**
 * namespace aliases
 */
declare namespace Callback {
    const Parameter: typeof CallbackParameter;
    const Object: typeof CallbackObject;
    type Type<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> = CallbackType<ValueType, Type, MessageType>;
    type Argument<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> = CallbackArgument<ValueType, Type, MessageType>;
    namespace Function {
        const Parameter: typeof CallbackFunctionParameter;
        const Object: typeof CallbackFunctionObject;
        type Type<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> = CallbackFunctionType<ValueType, Type, MessageType>;
        type Argument<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> = CallbackFunctionArgument<ValueType, Type, MessageType>;
    }
}
export declare type CallbackFunctionArgument<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> = Value<ValueType> & Message<(result: Readonly<StrictOmit<Validatable<ValueType>, 'message'>>) => MessageType>;
export declare type CallbackFunctionType<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> = Return<ValueType, ValueType, Type, Readonly<Value<ValueType> & BaseValidatable & Message<MessageType>>>;
export declare function CallbackFunctionObject<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown>({ value, validation, message }: CallbackFunctionArgument<ValueType, Type, MessageType> & Guard<ValueType, Type>): CallbackFunctionType<ValueType, Type, MessageType>;
export declare function CallbackFunctionObject<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown>({ value, validation, message }: CallbackFunctionArgument<ValueType, Type, MessageType> & Validation<[ValueType], boolean>): CallbackFunctionType<ValueType, Type, MessageType>;
export declare function CallbackFunctionParameter<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown>(value: ValueType, validation: (value: ValueType) => value is Type, message: (result: Readonly<StrictOmit<Validatable<ValueType>, 'message'>>) => MessageType): CallbackFunctionType<ValueType, Type, MessageType>;
export declare function CallbackFunctionParameter<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown>(value: Type, validation: (value: ValueType) => boolean, message: (result: Readonly<StrictOmit<Validatable<ValueType>, 'message'>>) => MessageType): CallbackFunctionType<ValueType, Type, MessageType>;
