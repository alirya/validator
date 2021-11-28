import Simple from "./simple";
import Validatable from "./validatable/validatable";
import Message from "./message/function/simple";
/**
 * create {@see Validator} from multiple callback
 */
export default function CallbackParameters<Base = unknown, Allow extends Base = Base, Expectation extends Base = Base, MessageType = unknown>(validation: <Value extends Base>(argument: Value | Expectation) => argument is Expectation, message: Message.Parameters<Base, Allow, Expectation, MessageType>): Simple<Base, Expectation, Readonly<Validatable<Base, MessageType>>>;
export default function CallbackParameters<Base = unknown, Allow extends Base = Base, Expectation extends Base = Base, MessageType = unknown>(validation: <Argument extends Base>(argument: Base) => boolean, message: Message.Parameters<Base, Allow, Expectation, MessageType>): Simple<Base, Expectation, Readonly<Validatable<Base, MessageType>>>;
