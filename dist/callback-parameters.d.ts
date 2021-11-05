import Simple from "./simple";
import Dynamic from "./validatable/dynamic";
import Message from "./message/function/simple";
/**
 * create {@see Validator} from multiple callback
 */
export default function CallbackParameters<Base = unknown, Expectation extends Base = Base, MessageType = unknown>(validation: <Value extends Base>(argument: Value | Expectation) => argument is Expectation, message: Message.Parameters<Base, Expectation, MessageType>): Simple<Base, Expectation, Readonly<Dynamic<Base, MessageType>>>;
export default function CallbackParameters<Base = unknown, Expectation extends Base = Base, MessageType = unknown>(validation: <Argument extends Base>(argument: Base) => boolean, message: Message.Parameters<Base, Expectation, MessageType>): Simple<Base, Expectation, Readonly<Dynamic<Base, MessageType>>>;
