import Value from "@dikac/t-value/value";
import BaseValidatable from "@dikac/t-validatable/validatable";
import Dynamic from "./dynamic";
import Message from "@dikac/t-message/message";
import Validation from "@dikac/t-boolean/validation/validation";
import Guard from "@dikac/t-boolean/validation/guard";
import Return from "./simple";
import StrictOmit from "@dikac/t-object/strict-omit";
import Argument from "@dikac/t-function/argument/argument";
/**
 * assemble {@see Dynamic} from value,
 * callback validation, and callback message
 *
 * this contain multiple class and function implementation
 *
 * function implementation version offer
 * more accurate type
 */
/**
 * class type
 */
export interface CallbackType<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Arguments extends unknown[] = unknown[]> extends Readonly<Dynamic<ValueType, MessageType>>, Readonly<Validation<[ValueType, ...Arguments], boolean>>, Readonly<Argument<Arguments>> {
}
/**
 * class object argument
 */
export declare type CallbackArgument<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Arguments extends unknown[] = unknown[]> = CallbackFunctionArgumentValidation<ValueType, Type, MessageType, Arguments>;
/**
 * main implementation
 *
 */
export declare class CallbackParameter<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Arguments extends unknown[] = unknown[]> implements CallbackType<ValueType, Type, MessageType, Arguments> {
    readonly value: Type;
    readonly validation: (value: ValueType, ...argument: Arguments) => boolean;
    readonly messageFactory: (value: ValueType, message: boolean, ...argument: Arguments) => MessageType;
    readonly argument: Arguments;
    /**
     *
     * @param value
     * value to be validated by {@param validation}
     *
     * @param validation
     *
     * @param messageFactory
     * to generate message
     *
     * @param argument
     */
    constructor(value: Type, validation: (value: ValueType, ...argument: Arguments) => boolean, messageFactory: (value: ValueType, message: boolean, ...argument: Arguments) => MessageType, argument: Arguments);
    get valid(): boolean;
    get message(): MessageType;
}
/**
 * destructure argument version
 */
export declare class CallbackObject<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> extends CallbackParameter<ValueType, Type, MessageType> {
    constructor({ value, validation, message, argument }: CallbackArgument<ValueType, Type, MessageType>);
}
export declare type CallbackFunctionArgumentGuard<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Arguments extends unknown[] = unknown[]> = Value<Type> & Readonly<Argument<Arguments>> & Guard<ValueType, Type> & Message<(result: Readonly<StrictOmit<Dynamic<ValueType>, 'message'>>) => MessageType>;
export declare type CallbackFunctionArgumentValidation<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Arguments extends unknown[] = unknown[]> = Value<Type> & Validation<[ValueType], boolean> & Readonly<Argument<Arguments>> & Message<(result: Readonly<StrictOmit<Dynamic<ValueType>, 'message'>>) => MessageType>;
export declare type CallbackFunctionType<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> = Return<ValueType, ValueType, Type, Readonly<Value<ValueType> & BaseValidatable & Message<MessageType>>>;
export declare function CallbackFunctionObject<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown>({ value, validation, message }: CallbackFunctionArgumentGuard<ValueType, Type, MessageType>): CallbackFunctionType<ValueType, Type, MessageType>;
export declare function CallbackFunctionObject<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown>({ value, validation, message }: CallbackFunctionArgumentValidation<ValueType, Type, MessageType>): CallbackFunctionType<ValueType, Type, MessageType>;
/**
 * destructure argument implementation for function
 */
export declare function CallbackFunctionObject<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Argument extends unknown[] = unknown[]>(argument: CallbackFunctionArgumentValidation<ValueType, Type, MessageType, Argument> & Validation<[ValueType], boolean>): Readonly<Value<ValueType> & BaseValidatable<boolean> & Message<MessageType>>;
export declare function CallbackFunctionObject<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown>(argument: StrictOmit<CallbackFunctionArgumentValidation<ValueType, Type, MessageType, []>, 'argument'> & Validation<[ValueType], boolean>): Readonly<Value<ValueType> & BaseValidatable<boolean> & Message<MessageType>>;
export declare function CallbackFunctionParameter<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Argument extends unknown[] = unknown[]>(value: ValueType, validation: (value: ValueType) => value is Type, message: (value: ValueType, message: boolean) => MessageType, argument?: Argument): CallbackFunctionType<ValueType, Type, MessageType>;
export declare function CallbackFunctionParameter<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Argument extends unknown[] = unknown[]>(value: Type, validation: (value: ValueType) => boolean, message: (value: ValueType, message: boolean) => MessageType, argument?: Argument): CallbackFunctionType<ValueType, Type, MessageType>;
/**
 * namespace aliases
 */
declare namespace Callback {
    namespace Class {
        const Parameter: typeof CallbackParameter;
        const Object: typeof CallbackObject;
        type Type<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> = CallbackType<ValueType, Type, MessageType>;
        type Argument<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> = CallbackArgument<ValueType, Type, MessageType>;
    }
    namespace Function {
        const Parameter: typeof CallbackFunctionParameter;
        const Object: typeof CallbackFunctionObject;
        type Type<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> = CallbackFunctionType<ValueType, Type, MessageType>;
        type ArgumentGuard<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Arguments extends unknown[] = unknown[]> = CallbackFunctionArgumentGuard<ValueType, Type, MessageType, Arguments>;
        type ArgumentValidation<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Arguments extends unknown[] = unknown[]> = CallbackFunctionArgumentValidation<ValueType, Type, MessageType, Arguments>;
    }
}
export default Callback;
