import SimpleReturn from "../../validatable/simple";
import Validatable from "../../validatable/validatable";

export type MessageParameter<
    Base = unknown,
    Type extends Base = Base,
    MessageType = unknown
> =
    (<Argument extends Base>(value: Argument, valid: false) => MessageType) |
    (<Argument extends Type>(value: Argument, valid: true) => MessageType);

export type MessageObject<
    Base = unknown,
    Type extends Base = Base,
    MessageType = unknown
    > =
    <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageType>>>, 'message'>) => MessageType

export namespace Message {

    export type Parameter<
        Base = unknown,
        Type extends Base = Base,
        MessageType = unknown
        > = MessageParameter<Base, Type, MessageType>;

    export type Object<
        Base = unknown,
        Type extends Base = Base,
        MessageType = unknown
        > = MessageObject<Base, Type, MessageType>;
}

export default Message;
