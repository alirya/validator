import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Validation from "../boolean/validation/validation";
export default class CallbackClass<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> implements Readonly<Value<ValueType>>, Readonly<Validatable>, Readonly<Message<MessageType>>, Readonly<Validation<(value: ValueType) => boolean>> {
    readonly value: Type;
    readonly validation: (value: ValueType) => boolean;
    readonly messageFactory: (result: Readonly<Value<ValueType> & Validatable<boolean>>) => MessageType;
    constructor(value: Type, validation: (value: ValueType) => boolean, messageFactory: (result: Readonly<Value<ValueType> & Validatable<boolean>>) => MessageType);
    get valid(): boolean;
    get message(): MessageType;
}
