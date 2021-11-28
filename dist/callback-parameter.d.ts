import Simple from "./simple";
import Validatable from "./validatable/validatable";
import Validation from "@dikac/t-boolean/validation/validation";
import BaseMessage from "@dikac/t-message/message";
import Guard from "@dikac/t-boolean/validation/guard";
import Message from "./message/function/simple";
/**
 * create {@see Validator} from multiple callback
 */
export declare type CallbackParameterArgument<Base = unknown, Allow extends Base = Base, Type extends Base = Base, MessageType = unknown> = BaseMessage<Message.Parameter<Base, Allow, Type, MessageType>>;
export default function CallbackParameter<Base = unknown, Allow extends Base = Base, Type extends Base = Base, MessageType = unknown>({ validation, message }: CallbackParameterArgument<Base, Allow, Type, MessageType> & Guard<Base, Type>): Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>;
export default function CallbackParameter<Base = unknown, Allow extends Base = Base, Type extends Base = Base, MessageType = unknown>({ validation, message }: CallbackParameterArgument<Base, Allow, Type, MessageType> & Validation<[Base]>): Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>;
