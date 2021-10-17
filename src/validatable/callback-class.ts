import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Validation from "../boolean/validation/validation";
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";

export default class CallbackClass<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
> implements
    Readonly<Value<ValueType>>,
    Readonly<Validatable>,
    Readonly<Message<MessageType>>,
    Readonly<Validation<(value:ValueType)=>boolean>>
{

    constructor(
        readonly value : Type,
        readonly validation : (value:ValueType)=>boolean,
        readonly messageFactory : (result:Readonly<Value<ValueType> & Validatable<boolean>>)=> MessageType,
    ) {

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
