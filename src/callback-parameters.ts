import Simple from './simple';
import Validatable from './validatable/validatable';
import ValidationCallback from './validatable/callback-function-parameters';
import SimpleMessage from './message/function/simple-parameters';
import StaticMessage from './message/function/static-parameters';
import Validator from './validator';
import Validation from '@alirya/boolean/function/validation';
import Guard from '@alirya/boolean/function/guard';
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
        message : SimpleMessage<Allow, Expectation, MessageType>,
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
        message : SimpleMessage<Allow, Expectation, MessageType>,
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
        message : SimpleMessage<Allow, Expectation, MessageType, Arguments>,

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
        message : SimpleMessage<Allow, Expectation, MessageType, Arguments>,
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
        message : StaticMessage<Allow, Expectation, Allowed, Expected, MessageType>,
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
        message : StaticMessage<Allow, Expectation, Allowed, Expected, MessageType>,
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
        message : StaticMessage<Allow, Expectation, Allowed, Expected, MessageType, Arguments>,
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
        message : StaticMessage<Allow, Expectation, Allowed, Expected, MessageType, Arguments>,
    ) : Validator<Allow, Expectation, Allowed, Expected, Readonly<ValidatableType & Validatable<Allow, MessageType>>>;
}

export default <CallbackParametersType> function CallbackParameters<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[]
>(
    validation : Validation<[Allow], Allowed|Expected>,
    message : StaticMessage<Allow, Expectation, Allowed, Expected, MessageType>,
    argument : Arguments|[] = []
) : Validator<Allow, Expectation, Allowed, Expected, Validatable<Allow, MessageType>> {

    return function (value) {

        return ValidationCallback(value, validation, message, argument);

    } as Validator<Allow, Expectation, Allowed, Expected, Validatable<Allow, MessageType>>;
};
