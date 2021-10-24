import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Validatable from "./validatable/validatable";
import Validation from "@dikac/t-boolean/validation/validation";
import Message from "@dikac/t-message/message";
import Guard from "@dikac/t-boolean/validation/guard";
/**
 * create {@see Validator} from multiple callback
 */
export default Callback;
declare namespace Callback {
    const Object: typeof CallbackObject;
    const Parameter: typeof CallbackParameter;
    type Type<Base = unknown, Type extends Base = Base, MessageType = unknown> = CallbackType<Base, Type, MessageType>;
}
export declare type CallbackType<Base = unknown, Type extends Base = Base, MessageType = unknown> = Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>;
export declare type Argument<Base = unknown, Type extends Base = Base, MessageType = unknown> = Message<(<Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageType>>>, 'message'>) => MessageType)>;
export declare function CallbackObject<Base = unknown, Type extends Base = Base, MessageType = unknown>({ validation, message }: Argument<Base, Type, MessageType> & Guard<Base, Type>): Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>;
export declare function CallbackObject<Base = unknown, Type extends Base = Base, MessageType = unknown>({ validation, message }: Argument<Base, Type, MessageType> & Validation<[Base]>): Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>;
export declare function CallbackParameter<Base = unknown, Type extends Base = Base, MessageType = unknown>(validation: <Argument extends Base>(argument: Base) => argument is Type, message: <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageType>>>, 'message'>) => MessageType): Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>;
export declare function CallbackParameter<Base = unknown, Type extends Base = Base, MessageType = unknown>(validation: <Argument extends Base>(argument: Base) => boolean, message: <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageType>>>, 'message'>) => MessageType): Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>;
