import Simple from "./simple";
import Validatable from "./validatable/validatable";
import MessageCallback from "./message/function/simple-parameters";
import ValidatableType from "./validatable/validatable";
import StaticMessage from "./message/function/static-parameter";
import Infer from "@dikac/t-message/message/infer";
import Validator from "./validator";
import CallbackParameters from "./callback-parameters";
import Message from "@dikac/t-message/message";
import Guard from "@dikac/t-boolean/validation/guard";
import Validation from "@dikac/t-boolean/validation/validation";
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
export default function CallbackParameter<
    Base = unknown,
    Expectation = unknown,
    MessageType = unknown,
    >(
    {
        validation,
        message,
    } : Message<MessageCallback<Base, Expectation, MessageType>> & Guard<Base|Expectation, Expectation>

) : Simple<Base, Expectation, Readonly<Validatable<Base, MessageType>>>;
export default function CallbackParameter<
    Base = unknown,
    Expectation = unknown,
    MessageType = unknown,
    >(
    {
        validation,
        message,
    } : Message<MessageCallback<Base, Expectation, MessageType>> & Validation<[Base|Expectation]>
) : Simple<Base, Expectation, Readonly<Validatable<Base, MessageType>>>;


/**
 * Static
 *
 * @param validation
 * @param message
 * @constructor
 */
export default function CallbackParameter<

    Allow = any,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Validatable extends ValidatableType<Allow> = ValidatableType<Allow>
    >(
    {
        validation,
        message,
    } : Message<StaticMessage<Allow, Expectation, Allowed, Expected, Infer<Validatable>>> & Guard<Allow|Expectation, Expectation>
) : Validator<Allow, Expectation, Allowed, Expected, Validatable>
export default function CallbackParameter<
    Allow = any,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Validatable extends ValidatableType<Allow> = ValidatableType<Allow>
    >(
    {
        validation,
        message,
    } : Message<StaticMessage<Allow, Expectation, Allowed, Expected, Infer<Validatable>>> & Validation<[Allow|Expectation]>
) : Validator<Allow, Expectation, Allowed, Expected, Validatable>

export default function CallbackParameter<
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
    } : Message<StaticMessage<Allow, Expectation, Allowed, Expected, Infer<Validatable>>> & Guard<Allow|Expectation, Expectation>
) : Validator<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, MessageType>> {

    return CallbackParameters(validation, (value, valid) => message({value, valid})) as
        Validator<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, MessageType>>
}
