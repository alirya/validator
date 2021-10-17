import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import Return from "./simple";
import Validation from "../boolean/validation/validation";
import CallbackClass from "./callback-class";

/**
 * {@link Callback} factory by using {@param object}
 *
 * {@link validation} is used as callback
 * {@link Value} is used as value
 * {@link Message} is used as message
 */

export default function CallbackFromObject<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
>(
    object : Value<ValueType> & Validation<(value:unknown)=>value is Type> & Message<(result:Value<ValueType> & Validatable)=>MessageType>,
)  : Return<ValueType, ValueType, Type, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;

export default function CallbackFromObject<
    ValueType = unknown,
    MessageType = unknown,
>(
    object : Value<ValueType> & Validation<(value:unknown)=>boolean> & Message<(result:Value<ValueType> & Validatable)=>MessageType>,
)  : Readonly<Value<ValueType> & Validatable & Message<MessageType>> ;

export default function CallbackFromObject<
    ValueType = unknown,
    MessageType = unknown,
>(
    object : Value<ValueType> & Validation<(value:unknown)=>boolean> & Message<(result:Value<ValueType> & Validatable)=>MessageType>,
)  : Readonly<Value<ValueType> & Validatable & Message<MessageType>> {

    return new CallbackClass(object.value, object.validation, object.message);
}

