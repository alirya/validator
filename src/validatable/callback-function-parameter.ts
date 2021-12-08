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

/**
 * simple validation
 */
export default function CallbackFunctionParameter<
    ValueType = unknown,
    Type = unknown,
    MessageType = unknown,
    >(argument : StrictOmit<CallbackFunctionParameterArgumentValidation<ValueType, Type, MessageType>, 'argument'>
) :  Readonly<Value<ValueType> & BaseValidatable<boolean> & Message<MessageType>>;
/**
 * simple guard
 */
export default function CallbackFunctionParameter<
    ValueType = unknown,
    Type = unknown,
    MessageType = unknown,
    >(argument : StrictOmit<CallbackFunctionParameterArgumentGuard<ValueType, Type, MessageType>, 'argument'>
) :  Readonly<Value<ValueType> & BaseValidatable<boolean> & Message<MessageType>>;


/**
 * simple validation arguments
 */
export default function CallbackFunctionParameter<
    ValueType = unknown,
    Type = unknown,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
    >(argument : Required<CallbackFunctionParameterArgumentValidation<ValueType, Type, MessageType, Arguments>, 'argument'>
) :  Readonly<Value<ValueType> & BaseValidatable<boolean> & Message<MessageType>>;
/**
 * simple guard arguments
 */
export default function CallbackFunctionParameter<
    ValueType = unknown,
    Type = unknown,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
    >(argument : Required<CallbackFunctionParameterArgumentGuard<ValueType, Type, MessageType, Arguments>, 'argument'>
) :  Readonly<Value<ValueType> & BaseValidatable<boolean> & Message<MessageType>>;





/**
 * static guard
 */
export default function CallbackFunctionParameter<
    Allow = unknown,
    Expectation = unknown,
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
    Allow = unknown,
    Expectation = unknown,
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
    Expectation = unknown,
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
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
>(
    argument : Required<CallbackFunctionParameterArgumentValidation<Allow, Expectation, MessageType, Arguments>, 'argument'>
) : Readonly<Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, MessageType>>>


export default function CallbackFunctionParameter<
    Allow = unknown,
    Expectation = unknown,
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
