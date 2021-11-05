import Value from "@dikac/t-value/value";
import BaseValidatable from "@dikac/t-validatable/validatable";
import Dynamic from "./dynamic";
import Message from "@dikac/t-message/message";
import Return from "./simple";
import CallbackClassParameters from "./callback-class-parameters";


/**
 * assemble {@see Dynamic} from value,
 * callback validation, and callback message
 *
 * this contain multiple class and function implementation
 *
 * function implementation version offer
 * more accurate type
 */

export type CallbackFunctionType<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown
    > =
    Return<ValueType, ValueType, Type, Readonly<Value<ValueType> & BaseValidatable & Message<MessageType>>>



export default function CallbackFunctionParameters<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Argument extends unknown[] = unknown[],
>(
    value : ValueType,
    validation : (value:ValueType)=>value is Type,
    message : (value:ValueType, message: boolean)=> MessageType,
    argument ?: Argument,
) : CallbackFunctionType<ValueType, Type, MessageType>

export default function CallbackFunctionParameters<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Argument extends unknown[] = unknown[],
>(
    value : Type,
    validation : (value:ValueType)=>boolean,
    message : (value:ValueType, message: boolean)=> MessageType,
    argument ?: Argument,
) : CallbackFunctionType<ValueType, Type, MessageType>


/**
 * parameter argument implementation for function
 */
export default function CallbackFunctionParameters<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Argument extends unknown[] = unknown[],
>(
    value : ValueType,
    validation : (value:ValueType)=>boolean,
    message : (value:ValueType, message: boolean)=> MessageType,
    argument : Argument|[] = [],
) :  Readonly<Dynamic<ValueType, MessageType>> {

    return new CallbackClassParameters(value, validation, message, argument)
}

