import Simple from './simple.js';
import Validatable from './validatable/validatable.js';
import ValidationCallback from './validatable/callback.js';
import SimpleMessage from './message/function/simple.js';
import StaticMessage from './message/function/static.js';
import Validator from './validator.js';
import Validation from '@alirya/boolean/function/validation.js';
import Guard from '@alirya/boolean/function/guard.js';
import ValidatableType from './validatable/validatable.js';
import Infer from '@alirya/message/message/infer.js';
import Message from '@alirya/message/message.js';
import GuardContainer from '@alirya/boolean/validation/guard.js';
import ValidationContainer from '@alirya/boolean/validation/validation.js';

/**
 * create {@see Validator} from multiple callback
 */

export interface CallbackParametersType<
    BaseAllow = any,
    BaseExpectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    BaseMessageType = unknown,
    BaseArguments extends unknown[] = unknown[],
    ValidatableType extends {} = {}
> {

    /**
     * Simple guard
     *
     * @param validation
     * @param message
     * @constructor
     */
    <
        Allow extends BaseAllow = BaseAllow,
        Expectation extends BaseExpectation = BaseExpectation,
        MessageType extends BaseMessageType = BaseMessageType,
    >(
        validation : Guard<Allow, Expectation>,
        message : SimpleMessage.Parameters<Allow, Expectation, MessageType>,
    ) : Simple<Allow, Expectation, Readonly<ValidatableType & Validatable<Allow, MessageType>>>;

    /**
     * Simple validation
     *
     * @param validation
     * @param message
     * @constructor
     */
    <
        Allow extends BaseAllow = BaseAllow,
        Expectation extends BaseExpectation = BaseExpectation,
        MessageType extends BaseMessageType = BaseMessageType,
    >(
        validation : Validation<[Allow]>,
        message : SimpleMessage.Parameters<Allow, Expectation, MessageType>,
    ) : Simple<Allow, Expectation, Readonly<ValidatableType & Validatable<Allow, MessageType>>>;

    /**
     * Simple guard
     *
     * @param validation
     * @param message
     * @constructor
     */
    <
        Allow extends BaseAllow = BaseAllow,
        Expectation extends BaseExpectation = BaseExpectation,
        MessageType extends BaseMessageType = BaseMessageType,
        Arguments extends BaseArguments = BaseArguments
    >(
        validation : Guard<Allow, Expectation, Arguments>,
        message : SimpleMessage.Parameters<Allow, Expectation, MessageType, Arguments>,

    ) : Simple<Allow, Expectation, Readonly<ValidatableType & Validatable<Allow, MessageType>>>;

    /**
     * Simple validation
     *
     * @param validation
     * @param message
     * @constructor
     */
    <
        Allow extends BaseAllow = BaseAllow,
        Expectation extends BaseExpectation = BaseExpectation,
        MessageType extends BaseMessageType = BaseMessageType,
        Arguments extends BaseArguments = BaseArguments
    >(
        validation : Validation<[Allow, ...Arguments]>,
        message : SimpleMessage.Parameters<Allow, Expectation, MessageType, Arguments>,
    ) : Simple<Allow, Expectation, Readonly<ValidatableType & Validatable<Allow, MessageType>>>;

    /**
     * Static guard
     *
     * @param validation
     * @param message
     * @constructor
     */
    <
        Allow extends BaseAllow = BaseAllow,
        Expectation extends BaseExpectation = BaseExpectation,
        Allowed extends boolean = boolean,
        Expected extends boolean = boolean,
        MessageType extends BaseMessageType = BaseMessageType,
    >(
        validation : Guard<Allow, Expectation>,
        message : StaticMessage.Parameters<Allow, Expectation, Allowed, Expected, MessageType>,
    ) : Validator<Allow, Expectation, Allowed, Expected, Readonly<ValidatableType & Validatable<Allow, MessageType>>>;

    /**
     * static validation
     *
     * @param validation
     * @param message
     * @constructor
     */
    <
        Allow extends BaseAllow = BaseAllow,
        Expectation extends BaseExpectation = BaseExpectation,
        Allowed extends boolean = boolean,
        Expected extends boolean = boolean,
        MessageType extends BaseMessageType = BaseMessageType,
    >(
        validation : Validation<[Allow], Allowed|Expected>,
        message : StaticMessage.Parameters<Allow, Expectation, Allowed, Expected, MessageType>,
    ) : Validator<Allow, Expectation, Allowed, Expected, Readonly<ValidatableType & Validatable<Allow, MessageType>>>;

    /**
     * Static guard argument
     *
     * @param validation
     * @param message
     * @constructor
     */
    <
        Allow extends BaseAllow = BaseAllow,
        Expectation extends BaseExpectation = BaseExpectation,
        Allowed extends boolean = boolean,
        Expected extends boolean = boolean,
        MessageType extends BaseMessageType = BaseMessageType,
        Arguments extends BaseArguments = BaseArguments
    >(
        validation : Guard<Allow, Expectation, Arguments>,
        message : StaticMessage.Parameters<Allow, Expectation, Allowed, Expected, MessageType, Arguments>,
    ) : Validator<Allow, Expectation, Allowed, Expected, Readonly<ValidatableType & Validatable<Allow, MessageType>>>;

    /**
     * static validation argument
     *
     * @param validation
     * @param message
     * @constructor
     */
    <
        Allow extends BaseAllow = BaseAllow,
        Expectation extends BaseExpectation = BaseExpectation,
        Allowed extends boolean = boolean,
        Expected extends boolean = boolean,
        MessageType extends BaseMessageType = BaseMessageType,
        Arguments extends BaseArguments = BaseArguments
    >(
        validation : Validation<[Allow, ...Arguments], Allowed|Expected>,
        message : StaticMessage.Parameters<Allow, Expectation, Allowed, Expected, MessageType, Arguments>,
    ) : Validator<Allow, Expectation, Allowed, Expected, Readonly<ValidatableType & Validatable<Allow, MessageType>>>;
}

export const CallbackParameters : CallbackParametersType = function <
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[]
>(
    validation : Validation<[Allow], Allowed|Expected>,
    message : StaticMessage.Parameters<Allow, Expectation, Allowed, Expected, MessageType>,
    argument : Arguments|[] = []
) : Validator<Allow, Expectation, Allowed, Expected, Validatable<Allow, MessageType>> {

    return function (value) {

        return ValidationCallback.Parameters(value, validation, message, argument);

    } as Validator<Allow, Expectation, Allowed, Expected, Validatable<Allow, MessageType>>;
};


/**
 * create {@see Validator} from multiple callback
 */

/**
 * Simple
 *
 * @param validation
 * @param message
 * @constructor
 */
export function CallbackParameter<
    Base = unknown,
    Expectation = unknown,
    MessageType = unknown,
    >(
    {
        validation,
        message,
    } : Message<SimpleMessage.Parameter<Base, Expectation, MessageType>> & GuardContainer<Base|Expectation, Expectation>

) : Simple<Base, Expectation, Readonly<Validatable<Base, MessageType>>>;
export function CallbackParameter<
    Base = unknown,
    Expectation = unknown,
    MessageType = unknown,
    >(
    {
        validation,
        message,
    } : Message<SimpleMessage.Parameter<Base, Expectation, MessageType>> & ValidationContainer<[Base|Expectation]>
) : Simple<Base, Expectation, Readonly<Validatable<Base, MessageType>>>;


/**
 * Static
 *
 * @param validation
 * @param message
 * @constructor
 */
export function CallbackParameter<

    Allow = any,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Validatable extends ValidatableType<Allow> = ValidatableType<Allow>
    >(
    {
        validation,
        message,
    } : Message<StaticMessage.Parameter<Allow, Expectation, Allowed, Expected, Infer<Validatable>>> & GuardContainer<Allow|Expectation, Expectation>
) : Validator<Allow, Expectation, Allowed, Expected, Validatable>;
export function CallbackParameter<
    Allow = any,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Validatable extends ValidatableType<Allow> = ValidatableType<Allow>
    >(
    {
        validation,
        message,
    } : Message<StaticMessage.Parameter<Allow, Expectation, Allowed, Expected, Infer<Validatable>>> & ValidationContainer<[Allow|Expectation]>
) : Validator<Allow, Expectation, Allowed, Expected, Validatable>;

export function CallbackParameter<
    Allow = any,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[]
    >(
    {
        validation,
        message,
    } : Message<StaticMessage.Parameter<Allow, Expectation, Allowed, Expected, Infer<Validatable>>> & GuardContainer<Allow|Expectation, Expectation>
) : Validator<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, MessageType>> {

    return CallbackParameters(validation, (value, valid) => message({value, valid})) as
        Validator<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, MessageType>>;
}


namespace Callback {
    export const Parameters = CallbackParameters;
    export const Parameter = CallbackParameter;
}
export default Callback;
