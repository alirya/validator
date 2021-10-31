import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Validatable from "./validatable/validatable";
import Validation from "@dikac/t-boolean/validation/validation";
import Message from "@dikac/t-message/message";
import Guard from "@dikac/t-boolean/validation/guard";
/**
 * create {@see Validator} from multiple callback
 */
export declare type CallbackMessage<Base = unknown, Type extends Base = Base, MessageType = unknown> = (<Argument extends Base>(value: Argument, valid: false) => MessageType) | (<Argument extends Type>(value: Argument, valid: true) => MessageType);
export declare type CallbackType<Base = unknown, Type extends Base = Base, MessageType = unknown> = Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>;
export declare type CallbackArgument<Base = unknown, Type extends Base = Base, MessageType = unknown> = Message<(<Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageType>>>, 'message'>) => MessageType)>;
export declare function CallbackObject<Base = unknown, Type extends Base = Base, MessageType = unknown>({ validation, message }: CallbackArgument<Base, Type, MessageType> & Guard<Base, Type>): Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>;
export declare function CallbackObject<Base = unknown, Type extends Base = Base, MessageType = unknown>({ validation, message }: CallbackArgument<Base, Type, MessageType> & Validation<[Base]>): Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>;
export declare function CallbackParameter<Base = unknown, Type extends Base = Base, MessageType = unknown>(validation: <Argument extends Base>(argument: Base) => argument is Type, message: CallbackMessage<Base, Type, MessageType>): Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>;
export declare function CallbackParameter<Base = unknown, Type extends Base = Base, MessageType = unknown>(validation: <Argument extends Base>(argument: Base) => boolean, message: CallbackMessage<Base, Type, MessageType>): Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>;
declare namespace Callback {
    const Object: typeof CallbackObject;
    const Parameter: typeof CallbackParameter;
    type Type<Base = unknown, Type extends Base = Base, MessageType = unknown> = CallbackType<Base, Type, MessageType>;
    type Argument<Base = unknown, Type extends Base = Base, MessageType = unknown> = CallbackArgument<Base, Type, MessageType>;
    type Message<Base = unknown, Type extends Base = Base, MessageType = unknown> = CallbackMessage<Base, Type, MessageType>;
}
export default Callback;
