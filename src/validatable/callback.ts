import Value from '@alirya/value/value.js';
import Static from './static.js';
import Message from '@alirya/message/message.js';
import Simple from './simple.js';
import ValidatableType from './validatable.js';
import {StaticParameters} from '../message/function/static.js';
import {SimpleParameters} from '../message/function/simple.js';
import Validation from '@alirya/boolean/function/validation.js';
import Guard from '@alirya/boolean/function/guard.js';
import Validatable from './validatable.js';
import MemoizeAccessor from '@alirya/object/function/memoize-accessor.js';
import ValidationValidation from '@alirya/boolean/validation/validation.js';
import ValidationFunction from '@alirya/boolean/function/validation.js';
import Argument from '@alirya/function/argument/argument.js';
import {ValidatableParameters} from '../message/function/validatable.js';
import {ValidatableParameter} from '../message/function/validatable.js';
import ValidationGuard from '@alirya/boolean/validation/guard.js';
import Dynamic from '../value/validatable.js';
import StrictOmit from '@alirya/object/strict-omit.js';
import {Required} from 'utility-types';



/**
 * class type
 */


/**
 * assemble {@see Validatable} from value,
 * callback validation, and callback message
 *
 * this contain multiple class and function implementation
 *
 * function implementation version offer
 * more accurate type
 */

/**
 * main implementation
 *
 */

export type CallbackType<
    ValueType = unknown,
    Type = ValueType,
    MessageType = unknown,
    Arguments extends unknown[]= unknown[],
    Boolean extends boolean = boolean
    > =
    Validatable<ValueType|Type, MessageType> &
    ValidationValidation<[ValueType|Type, ...Arguments], Boolean> &
    Argument<Arguments>;

/**
 * main implementation
 *
 */
export class CallbackClassParameters<
    ValueType = unknown,
    Type = ValueType,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
    Boolean extends boolean = boolean
    > implements CallbackType<ValueType, Type, MessageType, Arguments, Boolean> {

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
    constructor(
        value : ValueType,
        validation : ValidationFunction<[ValueType], Boolean>,
        messageFactory : ValidatableParameters<ValueType, MessageType, [], Boolean>,
    )
    constructor(
        value : ValueType,
        validation : ValidationFunction<[ValueType, ...Arguments], Boolean>,
        messageFactory : ValidatableParameters<ValueType, MessageType, Arguments, Boolean>,
        argument : Arguments,
    )
    constructor(
        readonly value : ValueType,
        readonly validation : ValidationFunction<[ValueType, ...Arguments], Boolean>,
        readonly messageFactory : ValidatableParameters<ValueType, MessageType, Arguments, Boolean>,
        readonly argument : Arguments = ([] as Arguments|[] as Arguments),
    ) {

    }

    @MemoizeAccessor()
    get valid() : Boolean {

        return this.validation(this.value, ...this.argument) as Boolean;
    }

    @MemoizeAccessor()
    get message() : MessageType {

        return this.messageFactory(this.value, this.valid, ...(this.argument as Arguments));
    }
}

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

/**
 * class object argument
 */

type CallbackClassArgument<
    ValueType = unknown,
    Type = unknown,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
    Boolean extends boolean = boolean
    > =
    Value<ValueType> &
    Readonly<Argument<Arguments>> &
    Message<ValidatableParameter<ValueType, MessageType, Dynamic<ValueType, Boolean> &
        Partial<Argument<Arguments>>>>;

export type CallbackClassArgumentValidation<
    ValueType = unknown,
    Type = unknown,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
    Boolean extends boolean = boolean
    > =
    CallbackClassArgument<ValueType, Type, MessageType, Arguments, Boolean> &
    ValidationValidation<[ValueType, ...Arguments], Boolean>;



export type CallbackClassArgumentGuard<
    ValueType = unknown,
    Type = unknown,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
    Boolean extends boolean = boolean
    > =
    CallbackClassArgument<ValueType, Type, MessageType, Arguments, Boolean> & ValidationGuard<ValueType, Type, Arguments>;

/**
 * class object argument
 */

/**
 * main implementation
 *
 */


/**
 * destructure argument version
 */

/**
 * destructure argument version
 */

export class CallbackClassParameter<
    ValueType = unknown,
    Type = ValueType,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
    Boolean extends boolean = boolean
    > extends CallbackClassParameters<ValueType, Type, MessageType, Arguments, Boolean> {

    constructor({
                    value,
                    validation,
                    message,
                    argument = ([] as Arguments|[] as Arguments)
                } : CallbackClassArgumentValidation<ValueType, Type, MessageType, Arguments, Boolean>|CallbackClassArgumentGuard<ValueType, Type, MessageType, Arguments, Boolean>) {

        super(value,
            ((value, ...argument) => validation(value, ...argument)) as ValidationFunction<[ValueType, ...Arguments], Boolean>,
            ()=>message(this),
            argument
        );
    }
}

/**
 * assemble {@see Validatable} from value,
 * callback validation, and callback message
 *
 * this contain multiple class and function implementation
 *
 * function implementation version offer
 * more accurate type
 */

export type CallbackReturnSimple<
    Allow = unknown,
    Expectation = unknown,
    Message = unknown,
    > =
    Readonly<Simple<Allow, Expectation, ValidatableType<Allow, Message>>>;

export type CallbackReturnStatic<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Message = unknown,
    > =
    Readonly<Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, Message>>>;

/**
 * simple validation
 * @param value
 * @param validation
 * @param message
 * @param argument
 * @constructor
 */
export function CallbackParameters<
    Allow = unknown,
    Expectation = unknown,
    Message = unknown,
>(
    value : Allow,
    validation : Guard<Allow, Expectation>,
    message : SimpleParameters<Allow, Expectation, Message>,
) : CallbackReturnSimple<Allow, Expectation, Message>;

/**
 * simple guard
 * @param value
 * @param validation
 * @param message
 * @param argument
 * @constructor
 */
export function CallbackParameters<
    Allow = unknown,
    Expectation = unknown,
    Message = unknown,
>(
    value : Allow,
    validation : Validation<[Allow]>,
    message : SimpleParameters<Allow, Expectation, Message>,
) : CallbackReturnSimple<Allow, Expectation, Message>;

/**
 * simple argument validation
 * @param value
 * @param validation
 * @param message
 * @param argument
 * @constructor
 */
export function CallbackParameters<
    Allow = unknown,
    Expectation = unknown,
    Message = unknown,
    Arguments extends unknown[] = unknown[],
>(
    value : Allow,
    validation : Guard<Allow, Expectation, Arguments>,
    message : SimpleParameters<Allow, Expectation, Message, Arguments>,
    argument : Arguments,
) : CallbackReturnSimple<Allow, Expectation, Message>;

/**
 * simple argument guard
 * @param value
 * @param validation
 * @param message
 * @param argument
 * @constructor
 */
export function CallbackParameters<
    Allow = unknown,
    Expectation = unknown,
    Message = unknown,
    Arguments extends unknown[] = unknown[],
>(
    value : Allow,
    validation : Validation<[Allow, ...Arguments]>,
    message : SimpleParameters<Allow, Expectation, Message, Arguments>,
    argument : Arguments,
) : CallbackReturnSimple<Allow, Expectation, Message>;

/**
 * static validation
 */
export function CallbackParameters<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Message = unknown,
>(
    value : Allow,
    validation : Validation<[Allow], Allowed|Expected>,
    message : StaticParameters<Allow, Expectation, Allowed, Expected, Message>,
) : CallbackReturnStatic<Allow, Expectation, Allowed, Expected, Message>;
/**
 * static guard
 */
export function CallbackParameters<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Message = unknown,
>(
    value : Allow,
    validation : Guard<Allow, Expectation>,
    message : StaticParameters<Allow, Expectation, Allowed, Expected, Message>,
) : CallbackReturnStatic<Allow, Expectation, Allowed, Expected, Message>;



/**
 * static validation argument
 */
export function CallbackParameters<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Message = unknown,
    Arguments extends unknown[] = unknown[],
>(
    value : Allow,
    validation : Validation<[Allow, ...Arguments], Allowed|Expected>,
    message : StaticParameters<Allow, Expectation, Allowed, Expected, Message, Arguments>,
    argument : Arguments,
) : CallbackReturnStatic<Allow, Expectation, Allowed, Expected, Message>;
/**
 * static guard argument
 */
export function CallbackParameters<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Message = unknown,
    Arguments extends unknown[] = unknown[],
>(
    value : Allow,
    validation : Guard<Allow, Expectation, Arguments>,
    message : StaticParameters<Allow, Expectation, Allowed, Expected, Message, Arguments>,
    argument : Arguments,
) : CallbackReturnStatic<Allow, Expectation, Allowed, Expected, Message>;



export function CallbackParameters<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[]
>(
    value : Allow,
    validation : Validation<[Allow, ...Arguments], Allowed|Expected>,
    message : StaticParameters<Allow, Expectation, Allowed, Expected, Message, Arguments>,
    argument : Arguments|[] = [],
) : CallbackReturnStatic<Allow, Expectation, Allowed, Expected, Message> {

    return new CallbackClassParameters(value, validation, message, argument) as Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, Message>>;
}




/**
 * assemble {@see Validatable} from value,
 * callback validation, and callback message
 *
 * this contain multiple class and function implementation
 *
 * function implementation version offer
 * more accurate type
 */


/**
 * simple validation
 */
export function CallbackParameter<
    ValueType = unknown,
    Type = unknown,
    MessageType = unknown,
    >(argument : StrictOmit<CallbackClassArgumentValidation<ValueType, Type, MessageType>, 'argument'>
) :  CallbackReturnSimple<ValueType, Type, MessageType>;
/**
 * simple guard
 */
export function CallbackParameter<
    ValueType = unknown,
    Type = unknown,
    MessageType = unknown,
    >(argument : StrictOmit<CallbackClassArgumentGuard<ValueType, Type, MessageType>, 'argument'>
) :  CallbackReturnSimple<ValueType, Type, MessageType>;


/**
 * simple validation arguments
 */
export function CallbackParameter<
    ValueType = unknown,
    Type = unknown,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
    >(argument : Required<CallbackClassArgumentValidation<ValueType, Type, MessageType, Arguments>, 'argument'>
) :  CallbackReturnSimple<ValueType, Type, MessageType>;
/**
 * simple guard arguments
 */
export function CallbackParameter<
    ValueType = unknown,
    Type = unknown,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
    >(argument : Required<CallbackClassArgumentGuard<ValueType, Type, MessageType, Arguments>, 'argument'>
) :  CallbackReturnSimple<ValueType, Type, MessageType>;





/**
 * static guard
 */
export function CallbackParameter<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
>(
    argument : StrictOmit<CallbackClassArgumentGuard<Allow, Expectation, MessageType>, 'argument'>
) : Readonly<CallbackReturnStatic<Allow, Expectation, Allowed, Expected, MessageType>>;

/**
 * static validation
 */
export function CallbackParameter<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
>(
    argument : StrictOmit<CallbackClassArgumentValidation<Allow, Expectation, MessageType>, 'argument'>
) : Readonly<CallbackReturnStatic<Allow, Expectation, Allowed, Expected, MessageType>>;





/**
 * static guard argument
 */
export function CallbackParameter<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
>(
    argument : Required<CallbackClassArgumentGuard<Allow, Expectation, MessageType, Arguments>, 'argument'>
) : Readonly<CallbackReturnStatic<Allow, Expectation, Allowed, Expected, MessageType>>;

/**
 * static validation argument
 */
export function CallbackParameter<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
>(
    argument : Required<CallbackClassArgumentValidation<Allow, Expectation, MessageType, Arguments>, 'argument'>
) : Readonly<CallbackReturnStatic<Allow, Expectation, Allowed, Expected, MessageType>>;


export function CallbackParameter<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
>(
        argument : CallbackClassArgumentValidation<Allow, Expectation, MessageType, Arguments> & CallbackClassArgumentGuard<Allow, Expectation, MessageType, Arguments>
) : Readonly<CallbackReturnStatic<Allow, Expectation, Allowed, Expected, MessageType>> {

    return new CallbackClassParameter<Allow, Expectation, MessageType, Arguments, Allowed|Expected>(argument) as
        Readonly<CallbackReturnStatic<Allow, Expectation, Allowed, Expected, MessageType>>;
}


namespace CallbackFunction {
    export const ClassParameters = CallbackClassParameters;
    export const ClassParameter = CallbackClassParameter;
    export const Parameters = CallbackParameters;
    export const Parameter = CallbackParameter;

    export type Type<
        ValueType = unknown,
        Type = ValueType,
        MessageType = unknown,
        Arguments extends unknown[]= unknown[],
        Boolean extends boolean = boolean
    >  = CallbackType<
        ValueType,
        Type,
        MessageType,
        Arguments,
        Boolean
    >;

    type ClassArgument<
        ValueType = unknown,
        Type = unknown,
        MessageType = unknown,
        Arguments extends unknown[] = unknown[],
        Boolean extends boolean = boolean
    > = CallbackClassArgument<
        ValueType,
        Type,
        MessageType,
        Arguments,
        Boolean
    >;

    export type ClassArgumentValidation<
        ValueType = unknown,
        Type = unknown,
        MessageType = unknown,
        Arguments extends unknown[] = unknown[],
        Boolean extends boolean = boolean
    > = CallbackClassArgumentValidation<
        ValueType,
        Type,
        MessageType,
        Arguments,
        Boolean
    >;



    export type ClassArgumentGuard<
        ValueType = unknown,
        Type = unknown,
        MessageType = unknown,
        Arguments extends unknown[] = unknown[],
        Boolean extends boolean = boolean
    > = CallbackClassArgumentGuard<
        ValueType,
        Type,
        MessageType,
        Arguments,
        Boolean
    >;

    export type ReturnSimple<
        Allow = unknown,
        Expectation = unknown,
        Message = unknown,
    > = CallbackReturnSimple<
            Allow,
            Expectation,
            Message
            >;

    export type ReturnStatic<
        Allow = unknown,
        Expectation = unknown,
        Allowed extends boolean = boolean,
        Expected extends boolean = boolean,
        Message = unknown,
    > = CallbackReturnStatic<
        Allow,
        Expectation,
        Allowed,
        Expected,
        Message
    >;

}
export default CallbackFunction;
