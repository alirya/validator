import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";
import Validation from "@dikac/t-boolean/validation/validation";

export default class CallbackClass<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
> implements
    Readonly<Value<ValueType>>,
    Readonly<Validatable>,
    Readonly<Message<MessageType>>,
    Readonly<Validation<[ValueType], boolean>>
{
    readonly value : Type;
    readonly validation : (value:ValueType)=>boolean;
    readonly messageFactory : (result:Readonly<Value<ValueType> & Validatable<boolean>>)=> MessageType;

    constructor({
         value,
         validation,
         message,
    } : Readonly<Value<Type> & {validation:(value:ValueType)=>boolean} & Message<(result:Readonly<Value<ValueType> & Validatable<boolean>>)=> MessageType>>) {

        this.value = value;
        this.validation = validation;
        this.messageFactory = message;
    }

    @MemoizeAccessor()
    get valid() {

        return this.validation(this.value);
    }

    @MemoizeAccessor()
    get message() {

        return this.messageFactory(this);
    }
}
