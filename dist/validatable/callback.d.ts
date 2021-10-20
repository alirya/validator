import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import Return from "./simple";
import Guard from "@dikac/t-boolean/validation/guard";
import Validation from "@dikac/t-boolean/validation/validation";
/**
 * use {@param option.validation} to populate {@link Validatable} data by passing {@param value}
 * to {@param option.validation}
 *
 * {@param option.message} is used to generate message
 *
 * @param value
 * @param option
 */
export default function Callback<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown>({ value, validation, message }: Value<ValueType> & Guard<ValueType, Type> & Message<(result: Readonly<Value<ValueType> & Validatable<boolean>>) => MessageType>): Return<ValueType, ValueType, Type, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;
export default function Callback<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown>({ value, validation, message }: Value<ValueType> & Validation<[ValueType], boolean> & Message<(result: Readonly<Value<ValueType> & Validatable<boolean>>) => MessageType>): Return<ValueType, ValueType, Type, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;
