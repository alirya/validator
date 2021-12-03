import Simple from "./simple";
import Validatable from "./validatable/validatable";
import ValidationCallback from "./validatable/callback-function-parameter";
import MessageCallback from "./message/function/simple";
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
    Expectation extends Base = Base,
    MessageType = unknown,
    >(
    // validation : <Value extends Base>(argument:Value|Expectation) => argument is Expectation,
    // message : MessageCallback.Parameters<Base, Expectation, MessageType>,
    {
        validation,
        message,
    } : Message<MessageCallback.Parameters<Base, Expectation, MessageType>> & Guard<Base|Expectation, Expectation>

) : Simple<Base, Expectation, Readonly<Validatable<Base, MessageType>>>;
export default function CallbackParameter<
    Base = unknown,
    Expectation extends Base = Base,
    MessageType = unknown,
    >(
    // validation : <Argument extends Base>(argument:Base) => boolean,
    // message : MessageCallback.Parameters<Base, Expectation, MessageType>,
    {
        validation,
        message,
    } : Message<MessageCallback.Parameters<Base, Expectation, MessageType>> & Validation<[Base|Expectation]>
) : Simple<Base, Expectation, Readonly<Validatable<Base, MessageType>>>;

// export default function CallbackParameter<
//     Base = unknown,
//     Expectation extends Base = Base,
//     MessageType = unknown,
//     >(
//     validation : <Argument extends Base>(argument:Base) => boolean,
//     message : MessageCallback.Parameters<Base, Expectation, MessageType>,
// ) : Simple<Base, Expectation, Readonly<Validatable<Base, MessageType>>>

/**
 * Static
 *
 * @param validation
 * @param message
 * @constructor
 */
export default function CallbackParameter<
    // Base = unknown,
    // Expectation extends Base = Base,
    // MessageType = unknown,
    Allow = any,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Validatable extends ValidatableType<Allow> = ValidatableType<Allow>
    >(
    //validation : <Value extends Base>(argument:Value|Expectation) => argument is Expectation,
    // validation : <Argument extends Allow>(argument:Allow) => boolean,
    // message : StaticMessage<Allow, Expectation, Allowed, Expected, Infer<Validatable>>,
    {
        validation,
        message,
    } : Message<StaticMessage<Allow, Expectation, Allowed, Expected, Infer<Validatable>>> & Guard<Allow|Expectation, Expectation>
) : Validator<Allow, Expectation, Allowed, Expected, Validatable>
export default function CallbackParameter<
    // Base = unknown,
    // Expectation extends Base = Base,
    // MessageType = unknown,
    Allow = any,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Validatable extends ValidatableType<Allow> = ValidatableType<Allow>
    >(
    // validation : <Argument extends Allow>(argument:Allow) => boolean,
    // message : StaticMessage<Allow, Expectation, Allowed, Expected, Infer<Validatable>>,
    {
        validation,
        message,
    } : Message<StaticMessage<Allow, Expectation, Allowed, Expected, Infer<Validatable>>> & Validation<[Allow|Expectation]>
) : Validator<Allow, Expectation, Allowed, Expected, Validatable>

export default function CallbackParameter<
    // Base = unknown,
    // Expectation extends Base = Base,
    // MessageType = unknown,

    Allow = any,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Validatable extends ValidatableType<Allow> = ValidatableType<Allow>
    >(
    // validation : <Argument extends Allow>(argument:Allow) => boolean,
    // message : StaticMessage<Allow, Expectation, Allowed, Expected, Infer<Validatable>>,
    {
        validation,
        message,
    } : Message<StaticMessage<Allow, Expectation, Allowed, Expected, Infer<Validatable>>> & Guard<Allow|Expectation, Expectation>
) : Validator<Allow, Expectation, Allowed, Expected, Validatable> {

    return CallbackParameters(validation, (value, valid) => message({value, valid})) as
        Validator<Allow, Expectation, Allowed, Expected, Validatable>
}
