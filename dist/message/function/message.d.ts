import SimpleReturn from "../../validatable/simple";
import Validatable from "../../validatable/validatable";
export declare type MessageParameter<Base = unknown, Type extends Base = Base, MessageType = unknown> = (<Argument extends Base>(value: Argument, valid: false) => MessageType) | (<Argument extends Type>(value: Argument, valid: true) => MessageType);
export declare type MessageObject<Base = unknown, Type extends Base = Base, MessageType = unknown> = <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageType>>>, 'message'>) => MessageType;
export declare namespace Message {
    type Parameter<Base = unknown, Type extends Base = Base, MessageType = unknown> = MessageParameter<Base, Type, MessageType>;
    type Object<Base = unknown, Type extends Base = Base, MessageType = unknown> = MessageObject<Base, Type, MessageType>;
}
export default Message;
