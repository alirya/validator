import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Validatable from "./validatable/validatable";
import Validation from "@dikac/t-boolean/validation/validation";
import BaseMessage from "@dikac/t-message/message";
import Guard from "@dikac/t-boolean/validation/guard";
import Message from "./message/function/simple";
/**
 * create {@see Validator} from multiple callback
 */
export declare type CallbackType<Base = unknown, Type extends Base = Base, MessageType = unknown> = Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>;
export declare type CallbackArgument<Base = unknown, Type extends Base = Base, MessageType = unknown> = BaseMessage<(<Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageType>>>, 'message'>) => MessageType)>;
export declare function CallbackObject<Base = unknown, Type extends Base = Base, MessageType = unknown>({ validation, message }: CallbackArgument<Base, Type, MessageType> & Guard<Base, Type>): Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>;
export declare function CallbackObject<Base = unknown, Type extends Base = Base, MessageType = unknown>({ validation, message }: CallbackArgument<Base, Type, MessageType> & Validation<[Base]>): Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>;
export declare function CallbackParameter<Base = unknown, Allow extends Base = Base, Expectation extends Base = Base, MessageType = unknown>(validation: <Value extends Base>(argument: Value | Expectation) => argument is Expectation, message: Message.Parameters<Base, Allow, Expectation, MessageType>): Simple<Base, Expectation, Readonly<Validatable<Base, MessageType>>>;
export declare function CallbackParameter<Base = unknown, Allow extends Base = Base, Expectation extends Base = Base, MessageType = unknown>(validation: <Argument extends Base>(argument: Base) => boolean, message: Message.Parameters<Base, Allow, Expectation, MessageType>): Simple<Base, Expectation, Readonly<Validatable<Base, MessageType>>>;
declare namespace Callback {
    const Object: typeof CallbackObject;
    const Parameter: typeof CallbackParameter;
    type Type<Base = unknown, Type extends Base = Base, MessageType = unknown> = CallbackType<Base, Type, MessageType>;
    type Argument<Base = unknown, Type extends Base = Base, MessageType = unknown> = CallbackArgument<Base, Type, MessageType>;
}
export default Callback;
