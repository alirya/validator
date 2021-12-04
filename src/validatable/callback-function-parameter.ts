import Value from "@dikac/t-value/value";
import BaseValidatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import StrictOmit from "@dikac/t-object/strict-omit";
import {Required} from "utility-types";
import CallbackClassParameter, {
    CallbackClassParameterArgumentGuard as CallbackFunctionParameterArgumentGuard,
    CallbackClassParameterArgumentValidation as CallbackFunctionParameterArgumentValidation
} from "./callback-class-parameter";
import Static from "./static";
import ValidatableType from "./validatable";


/**
 * assemble {@see Validatable} from value,
 * callback validation, and callback message
 *
 * this contain multiple class and function implementation
 *
 * function implementation version offer
 * more accurate type
 */

export {CallbackFunctionParameterArgumentGuard, CallbackFunctionParameterArgumentValidation};

// export type CallbackFunctionArgumentGuard<
//     ValueType = unknown,
//     Type extends ValueType = ValueType,
//     MessageType = unknown,
//     Arguments extends unknown[] = unknown[]
//     > =
//     Value<Type> &
//     Readonly<Argument<Arguments>> &
//     Guard<ValueType, Type> &
//     Message<(result:Readonly<StrictOmit<Validatable<ValueType>,'message'>>)=> MessageType>;
//
// export type CallbackFunctionArgumentValidation<
//     ValueType = unknown,
//     Type extends ValueType = ValueType,
//     MessageType = unknown,
//     Arguments extends unknown[] = unknown[]
//     > =
//     Value<Type> &
//     Validation<[ValueType], boolean> &
//     Readonly<Argument<Arguments>> &
//     Message<(result:Readonly<StrictOmit<Validatable<ValueType>,'message'>>)=> MessageType>;
//
// export type CallbackFunctionArgumentGuard<
//     Allow = unknown,
//     Expectation extends Allow = Allow,
//     Allowed extends boolean = boolean,
//     Expected extends boolean = boolean,
//     MessageType = unknown,
//     Arguments extends unknown[] = unknown[],
//     > =
//     Value<Allow> &
//     Readonly<Argument<Arguments>> &
//     Guard<Allow, Expectation> &
//     Message<StaticParameters<Allow, Expectation, Allowed, Expected, MessageType, Arguments>>;
//
// export type CallbackFunctionArgumentValidation<
//     Allow = unknown,
//     Expectation extends Allow = Allow,
//     Allowed extends boolean = boolean,
//     Expected extends boolean = boolean,
//     MessageType = unknown,
//     Arguments extends unknown[] = unknown[],
//     > =
//     Value<Allow> &
//     Validation<[Allow], boolean> &
//     Readonly<Argument<Arguments>> &
//     Message<StaticParameters<Allow, Expectation, Allowed, Expected, MessageType, Arguments>>;
//
//
// export default function CallbackFunctionParameter<
//     ValueType = unknown,
//     Type extends ValueType = ValueType,
//     MessageType = unknown,
//     >({
//           value,
//           validation,
//           message
//       } : CallbackFunctionArgumentGuard<ValueType, Type, MessageType>
// ) : CallbackFunctionType<ValueType, Type, MessageType>
//
// export default function CallbackFunctionParameter<
//     ValueType = unknown,
//     Type extends ValueType = ValueType,
//     MessageType = unknown,
//     >({
//           value,
//           validation,
//           message
//       } : CallbackFunctionArgumentValidation<ValueType, Type, MessageType>
// ) : CallbackFunctionType<ValueType, Type, MessageType>
// /**
//  * destructure argument implementation for function
//  */
// export default function CallbackFunctionParameter<
//     ValueType = unknown,
//     Type extends ValueType = ValueType,
//     MessageType = unknown,
//     Argument extends unknown[] = unknown[],
//     >(argument : CallbackFunctionArgumentValidation<ValueType, Type, MessageType, Argument> & Validation<[ValueType], boolean>
// ) :  Readonly<Value<ValueType> & BaseValidatable<boolean> & Message<MessageType>>;


/**
 * simple validation
 */
export default function CallbackFunctionParameter<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    >(argument : StrictOmit<CallbackFunctionParameterArgumentValidation<ValueType, Type, MessageType>, 'argument'>
) :  Readonly<Value<ValueType> & BaseValidatable<boolean> & Message<MessageType>>;
/**
 * simple guard
 */
export default function CallbackFunctionParameter<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    >(argument : StrictOmit<CallbackFunctionParameterArgumentGuard<ValueType, Type, MessageType>, 'argument'>
) :  Readonly<Value<ValueType> & BaseValidatable<boolean> & Message<MessageType>>;


/**
 * simple validation arguments
 */
export default function CallbackFunctionParameter<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
    >(argument : Required<CallbackFunctionParameterArgumentValidation<ValueType, Type, MessageType, Arguments>, 'argument'>
) :  Readonly<Value<ValueType> & BaseValidatable<boolean> & Message<MessageType>>;
/**
 * simple guard arguments
 */
export default function CallbackFunctionParameter<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
    >(argument : Required<CallbackFunctionParameterArgumentGuard<ValueType, Type, MessageType, Arguments>, 'argument'>
) :  Readonly<Value<ValueType> & BaseValidatable<boolean> & Message<MessageType>>;





/**
 * static guard
 */
export default function CallbackFunctionParameter<
    Allow = unknown,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
>(
    argument : StrictOmit<CallbackFunctionParameterArgumentGuard<Allow, Expectation, MessageType>, 'argument'>
) : Readonly<Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, MessageType>>>

/**
 * static validation
 */
export default function CallbackFunctionParameter<
    ValueType = unknown,
    Allow = unknown,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
>(
    argument : StrictOmit<CallbackFunctionParameterArgumentValidation<Allow, Expectation, MessageType>, 'argument'>
) : Readonly<Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, MessageType>>>





/**
 * static guard argument
 */
export default function CallbackFunctionParameter<
    Allow = unknown,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
>(
    argument : Required<CallbackFunctionParameterArgumentGuard<Allow, Expectation, MessageType, Arguments>, 'argument'>
) : Readonly<Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, MessageType>>>

/**
 * static validation argument
 */
export default function CallbackFunctionParameter<
    ValueType = unknown,
    Allow = unknown,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
>(
    argument : Required<CallbackFunctionParameterArgumentValidation<Allow, Expectation, MessageType, Arguments>, 'argument'>
) : Readonly<Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, MessageType>>>


export default function CallbackFunctionParameter<
    Allow = unknown,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
>(
        argument : CallbackFunctionParameterArgumentValidation<Allow, Expectation, MessageType, Arguments> & CallbackFunctionParameterArgumentGuard<Allow, Expectation, MessageType, Arguments>
) : Readonly<Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, MessageType>>> {

    return new CallbackClassParameter<Allow, Expectation, MessageType, Arguments, Allowed|Expected>(argument) as
        Readonly<Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, MessageType>>>;
}
