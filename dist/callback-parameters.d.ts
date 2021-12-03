import Simple from "./simple";
import Validatable from "./validatable/validatable";
import Message from "./message/function/simple";
import ValidatableType from "./validatable/validatable";
import StaticMessage from "./message/function/static-parameters";
import Infer from "@dikac/t-message/message/infer";
import Validator from "./validator";
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
export default function CallbackParameters<Base = unknown, Expectation extends Base = Base, MessageType = unknown>(validation: <Value extends Base>(argument: Value | Expectation) => argument is Expectation, message: Message.Parameters<Base, Expectation, MessageType>): Simple<Base, Expectation, Readonly<Validatable<Base, MessageType>>>;
export default function CallbackParameters<Base = unknown, Expectation extends Base = Base, MessageType = unknown>(validation: <Argument extends Base>(argument: Base) => boolean, message: Message.Parameters<Base, Expectation, MessageType>): Simple<Base, Expectation, Readonly<Validatable<Base, MessageType>>>;
export default function CallbackParameters<Base = unknown, Expectation extends Base = Base, MessageType = unknown>(validation: <Argument extends Base>(argument: Base) => boolean, message: Message.Parameters<Base, Expectation, MessageType>): Simple<Base, Expectation, Readonly<Validatable<Base, MessageType>>>;
/**
 * Static
 *
 * @param validation
 * @param message
 * @constructor
 */
export default function CallbackParameters<Allow = any, Expectation extends Allow = Allow, Allowed extends boolean = boolean, Expected extends boolean = boolean, Validatable extends ValidatableType<Allow> = ValidatableType<Allow>>(validation: <Argument extends Allow>(argument: Allow) => boolean, message: StaticMessage<Allow, Expectation, Allowed, Expected, Infer<Validatable>>): Validator<Allow, Expectation, Allowed, Expected, Validatable>;
export default function CallbackParameters<Allow = any, Expectation extends Allow = Allow, Allowed extends boolean = boolean, Expected extends boolean = boolean, Validatable extends ValidatableType<Allow> = ValidatableType<Allow>>(validation: <Argument extends Allow>(argument: Allow) => boolean, message: StaticMessage<Allow, Expectation, Allowed, Expected, Infer<Validatable>>): Validator<Allow, Expectation, Allowed, Expected, Validatable>;
