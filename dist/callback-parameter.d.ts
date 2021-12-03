import Simple from "./simple";
import Validatable from "./validatable/validatable";
import MessageCallback from "./message/function/simple";
import ValidatableType from "./validatable/validatable";
import StaticMessage from "./message/function/static-parameter";
import Infer from "@dikac/t-message/message/infer";
import Validator from "./validator";
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
export default function CallbackParameter<Base = unknown, Expectation extends Base = Base, MessageType = unknown>({ validation, message, }: Message<MessageCallback.Parameters<Base, Expectation, MessageType>> & Guard<Base | Expectation, Expectation>): Simple<Base, Expectation, Readonly<Validatable<Base, MessageType>>>;
export default function CallbackParameter<Base = unknown, Expectation extends Base = Base, MessageType = unknown>({ validation, message, }: Message<MessageCallback.Parameters<Base, Expectation, MessageType>> & Validation<[Base | Expectation]>): Simple<Base, Expectation, Readonly<Validatable<Base, MessageType>>>;
/**
 * Static
 *
 * @param validation
 * @param message
 * @constructor
 */
export default function CallbackParameter<Allow = any, Expectation extends Allow = Allow, Allowed extends boolean = boolean, Expected extends boolean = boolean, Validatable extends ValidatableType<Allow> = ValidatableType<Allow>>({ validation, message, }: Message<StaticMessage<Allow, Expectation, Allowed, Expected, Infer<Validatable>>> & Guard<Allow | Expectation, Expectation>): Validator<Allow, Expectation, Allowed, Expected, Validatable>;
export default function CallbackParameter<Allow = any, Expectation extends Allow = Allow, Allowed extends boolean = boolean, Expected extends boolean = boolean, Validatable extends ValidatableType<Allow> = ValidatableType<Allow>>({ validation, message, }: Message<StaticMessage<Allow, Expectation, Allowed, Expected, Infer<Validatable>>> & Validation<[Allow | Expectation]>): Validator<Allow, Expectation, Allowed, Expected, Validatable>;
