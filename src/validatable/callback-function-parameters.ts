import Value from "@dikac/t-value/value";
import BaseValidatable from "@dikac/t-validatable/validatable";
import Validatable from "./validatable";
import Static from "./static";
import Message from "@dikac/t-message/message";
import Simple from "./simple";
import CallbackClassParameters from "./callback-class-parameters";
import ValidatableType from "./validatable";
import Infer from "@dikac/t-message/message/infer";
import StaticParameters from "../message/function/static-parameters";


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
    Type extends ValueType = ValueType,
    MessageType = unknown
    > =
    Simple<ValueType, Type, Readonly<Value<ValueType> & BaseValidatable & Message<MessageType>>>

//
// /**
//  * guard
//  *
//  * @param value
//  * @param validation
//  * @param message
//  * @param argument
//  * @constructor
//  */
// export default function CallbackFunctionParameters<
//     ValueType = unknown,
//     Type extends ValueType = ValueType,
//     MessageType = unknown,
//     Argument extends unknown[] = unknown[],
// >(
//     value : ValueType,
//     validation : (value:ValueType, ...extra: Argument)=>value is Type,
//     message : (value:ValueType, message: boolean, ...extra: Argument)=> MessageType,
//     argument : Argument,
// ) : CallbackFunctionType<ValueType, Type, MessageType>
//
// /**
//  * boolean
//  *
//  * @param value
//  * @param validation
//  * @param message
//  * @param argument
//  * @constructor
//  */
// export default function CallbackFunctionParameters<
//     ValueType = unknown,
//     Type extends ValueType = ValueType,
//     MessageType = unknown,
//     Argument extends unknown[] = unknown[],
// >(
//     value : Type,
//     validation : (value:ValueType, ...extra: Argument)=>boolean,
//     message : (value:ValueType, message: boolean, ...extra: Argument)=> MessageType,
//     argument : Argument,
// ) : CallbackFunctionType<ValueType, Type, MessageType>
//
// /**
//  * guard
//  *
//  * @param value
//  * @param validation
//  * @param message
//  * @constructor
//  */
// export default function CallbackFunctionParameters<
//     ValueType = unknown,
//     Type extends ValueType = ValueType,
//     MessageType = unknown,
// >(
//     value : ValueType,
//     validation : (value:ValueType)=>value is Type,
//     message : (value:ValueType, message: boolean)=> MessageType,
// ) : CallbackFunctionType<ValueType, Type, MessageType>
//
// /**
//  * boolean
//  *
//  * @param value
//  * @param validation
//  * @param message
//  * @constructor
//  */
// export default function CallbackFunctionParameters<
//     ValueType = unknown,
//     Type extends ValueType = ValueType,
//     MessageType = unknown,
// >(
//     value : Type,
//     validation : (value:ValueType)=>boolean,
//     message : (value:ValueType, message: boolean)=> MessageType,
// ) : CallbackFunctionType<ValueType, Type, MessageType>
//
//
// /**
//  * simple
//  */
// export default function CallbackFunctionParameters<
//     Allow = unknown,
//     Expectation extends Allow = Allow,
//     Validatable extends ValidatableType<Allow> = ValidatableType<Allow>,
// >(
//     value : Allow,
//     validation : (value:Allow)=>boolean,
//     message : (value:Allow, message: boolean)=> Infer<Validatable>,
// ) : Readonly<Simple<Allow, Expectation, Validatable>>
//
// export default function CallbackFunctionParameters<
//     Allow = unknown,
//     Expectation extends Allow = Allow,
//     Validatable extends ValidatableType<Allow> = ValidatableType<Allow>,
//     Arguments extends unknown[] = unknown[],
// >(
//     value : Allow,
//     validation : (value:Allow, ...extra)=>boolean,
//     message : (value:Allow, message: boolean, ...extra)=> Infer<Validatable>,
//     argument : Arguments,
// ) : Readonly<Simple<Allow, Expectation, Validatable>>
//
//
//
// /**
//  * static
//  */
// export default function CallbackFunctionParameters<
//     Allow = unknown,
//     Expectation extends Allow = Allow,
//     Allowed extends boolean = boolean,
//     Expected extends boolean = boolean,
//     Validatable extends ValidatableType<Allow> = ValidatableType<Allow>,
// >(
//     value : Allow,
//     validation : (value:Allow)=>boolean,
//     message : (value:Allow, message: boolean)=> Infer<Validatable>,
// ) : Readonly<Static<Allow, Expectation, Allowed, Expected, Validatable>>
//
// export default function CallbackFunctionParameters<
//     Allow = unknown,
//     Expectation extends Allow = Allow,
//     Allowed extends boolean = boolean,
//     Expected extends boolean = boolean,
//     Validatable extends ValidatableType<Allow> = ValidatableType<Allow>,
//     Arguments extends unknown[] = unknown[],
// >(
//     value : Allow,
//     validation : (value:Allow, ...extra: Arguments)=>boolean,
//     message : (value:Allow, message: boolean, ...extra: Arguments)=> Infer<Validatable>,
//     argument : Arguments,
// ) : Readonly<Static<Allow, Expectation, Allowed, Expected, Validatable>>
//


export default function CallbackFunctionParameters<
    Allow = unknown,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Message = unknown,
    Arguments extends unknown[] = unknown[],
>(
    value : Allow,
    validation : (value:Allow, ...extra: Arguments)=>Allowed|Expected,
    // message : (value:Allow, valid: Allowed|Expected, ...extra: Arguments)=> Message,
    message : StaticParameters<Allow, Expectation, Allowed, Expected, Message, Arguments>,
    argument : Arguments,
) : Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, Message>> {

    // return {
    //     value,
    //     message : message(value, true, ...argument ),
    //     valid : true
    // } as Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, Message>>

    return new CallbackClassParameters(value, validation, message, argument) as
        Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, Message>>;
}
