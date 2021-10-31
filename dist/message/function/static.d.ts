import SimpleReturn from "../../validatable/simple";
import Dynamic from "../../validatable/dynamic";
export declare type StaticParameter<Base = unknown, Type extends Base = Base, MessageType = unknown> = (<Argument extends Base>(value: Argument, valid: false) => MessageType) | (<Argument extends Type>(value: Argument, valid: true) => MessageType);
export declare type StaticObject<Base = unknown, Type extends Base = Base, MessageType = unknown> = <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Dynamic<Base, MessageType>>>, 'message'>) => MessageType;
export declare namespace Static {
    type Parameter<Base = unknown, Type extends Base = Base, MessageType = unknown> = StaticParameter<Base, Type, MessageType>;
    type Object<Base = unknown, Type extends Base = Base, MessageType = unknown> = StaticObject<Base, Type, MessageType>;
}
export default Static;
