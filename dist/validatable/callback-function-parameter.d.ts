import Value from "@dikac/t-value/value";
import BaseValidatable from "@dikac/t-validatable/validatable";
import Validatable from "./validatable";
import Message from "@dikac/t-message/message";
import Validation from "@dikac/t-boolean/validation/validation";
import Guard from "@dikac/t-boolean/validation/guard";
import StrictOmit from "@dikac/t-object/strict-omit";
import Argument from "@dikac/t-function/argument/argument";
import { CallbackFunctionType } from "./callback-function-parameters";
/**
 * assemble {@see Validatable} from value,
 * callback validation, and callback message
 *
 * this contain multiple class and function implementation
 *
 * function implementation version offer
 * more accurate type
 */
export declare type CallbackFunctionArgumentGuard<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Arguments extends unknown[] = unknown[]> = Value<Type> & Readonly<Argument<Arguments>> & Guard<ValueType, Type> & Message<(result: Readonly<StrictOmit<Validatable<ValueType>, 'message'>>) => MessageType>;
export declare type CallbackFunctionArgumentValidation<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Arguments extends unknown[] = unknown[]> = Value<Type> & Validation<[ValueType], boolean> & Readonly<Argument<Arguments>> & Message<(result: Readonly<StrictOmit<Validatable<ValueType>, 'message'>>) => MessageType>;
export default function CallbackFunctionParameter<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown>({ value, validation, message }: CallbackFunctionArgumentGuard<ValueType, Type, MessageType>): CallbackFunctionType<ValueType, Type, MessageType>;
export default function CallbackFunctionParameter<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown>({ value, validation, message }: CallbackFunctionArgumentValidation<ValueType, Type, MessageType>): CallbackFunctionType<ValueType, Type, MessageType>;
/**
 * destructure argument implementation for function
 */
export default function CallbackFunctionParameter<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Argument extends unknown[] = unknown[]>(argument: CallbackFunctionArgumentValidation<ValueType, Type, MessageType, Argument> & Validation<[ValueType], boolean>): Readonly<Value<ValueType> & BaseValidatable<boolean> & Message<MessageType>>;
export default function CallbackFunctionParameter<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown>(argument: StrictOmit<CallbackFunctionArgumentValidation<ValueType, Type, MessageType, []>, 'argument'> & Validation<[ValueType], boolean>): Readonly<Value<ValueType> & BaseValidatable<boolean> & Message<MessageType>>;
