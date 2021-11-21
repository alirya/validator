import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Validatable from "./validatable/validatable";
import Validation from "@dikac/t-boolean/validation/validation";
import BaseMessage from "@dikac/t-message/message";
import Guard from "@dikac/t-boolean/validation/guard";
/**
 * create {@see Validator} from multiple callback
 */
export declare type CallbackParameterArgument<Base = unknown, Type extends Base = Base, MessageType = unknown> = BaseMessage<(<Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageType>>>, 'message'>) => MessageType)>;
export default function CallbackParameter<Base = unknown, Type extends Base = Base, MessageType = unknown>({ validation, message }: CallbackParameterArgument<Base, Type, MessageType> & Guard<Base, Type>): Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>;
export default function CallbackParameter<Base = unknown, Type extends Base = Base, MessageType = unknown>({ validation, message }: CallbackParameterArgument<Base, Type, MessageType> & Validation<[Base]>): Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>;
