import Value from "@dikac/t-value/value";
import BaseValidatable from "@dikac/t-validatable/validatable";
import Validatable from "./validatable";
import Message from "@dikac/t-message/message";
import Return from "./simple";
import CallbackClassParameters from "./callback-class-parameters";
import MessageSimple from "../message/function/simple-parameters";

/**
 * assemble {@see Validatable} from value,
 * callback validation, and callback message
 *
 * this contain multiple class and function implementation
 *
 * function implementation version offer
 * more accurate type
 */

export type CallbackFunctionType<
    ValueType = unknown,
    Allow extends ValueType = ValueType,
    Type extends ValueType = ValueType,
    MessageType = unknown
    > =
    Return<ValueType, ValueType, Type, Readonly<Value<ValueType> & BaseValidatable & Message<MessageType>>>


/**
 * guard
 *
 * @param value
 * @param validation
 * @param message
 * @param argument
 * @constructor
 */
export default function CallbackFunctionParameters<
    ValueType = unknown,
    Allow extends ValueType = ValueType,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Argument extends unknown[] = unknown[],
>(
    value : ValueType,
    validation : (value:ValueType, ...extra: Argument)=>value is Type,
    message : MessageSimple<ValueType, Allow, Type, MessageType, Argument>,
    argument : Argument,
) : CallbackFunctionType<ValueType, Allow, Type, MessageType>

/**
 * boolean
 *
 * @param value
 * @param validation
 * @param message
 * @param argument
 * @constructor
 */
export default function CallbackFunctionParameters<
    ValueType = unknown,
    Allow extends ValueType = ValueType,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Argument extends unknown[] = unknown[],
>(
    value : Type,
    validation : (value:ValueType, ...extra: Argument)=>boolean,
    message : MessageSimple<ValueType, Allow, Type, MessageType, Argument>,
    argument : Argument,
) : CallbackFunctionType<ValueType, Allow, Type, MessageType>

/**
 * guard
 *
 * @param value
 * @param validation
 * @param message
 * @constructor
 */
export default function CallbackFunctionParameters<
    ValueType = unknown,
    Allow extends ValueType = ValueType,
    Type extends ValueType = ValueType,
    MessageType = unknown,
>(
    value : ValueType,
    validation : (value:ValueType)=>value is Type,
    message : MessageSimple<ValueType, Allow, Type, MessageType>,
) : CallbackFunctionType<ValueType, Allow, Type, MessageType>

/**
 * boolean
 *
 * @param value
 * @param validation
 * @param message
 * @constructor
 */
export default function CallbackFunctionParameters<
    ValueType = unknown,
    Allow extends ValueType = ValueType,
    Type extends ValueType = ValueType,
    MessageType = unknown,
>(
    value : Type,
    validation : (value:ValueType)=>boolean,
    // message : (value:ValueType, message: boolean)=> MessageType,
    message : MessageSimple<ValueType, Allow, Type, MessageType>,
) : CallbackFunctionType<ValueType, Allow, Type, MessageType>


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
) :  Readonly<Validatable<ValueType, MessageType>> {

    return new CallbackClassParameters(value, validation, message, argument)
}

