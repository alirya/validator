import InferMessage from "@dikac/t-message/message/infer";
import InferValue from "@dikac/t-value/value/infer";
import Dynamic from "./dynamic";
import InferValidatable from "@dikac/t-validatable/boolean/infer";
import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import ValidatableInterface from "@dikac/t-validatable/validatable";
/**
 * read only wrapper for {@link Message}, {@link Value} and {@link ValidatableInterface}
 */
export interface ReadonlyWrapperType<ValueType extends Value, MessageType extends Message, ValidatableType extends ValidatableInterface> extends Readonly<Dynamic<InferValue<ValueType>, InferMessage<MessageType>, InferValidatable<ValidatableType>>> {
    readonly valueContainer: ValueType;
    readonly messageContainer: MessageType;
    readonly validatableContainer: ValidatableType;
}
export declare class ReadonlyWrapperParameter<ValueType extends Value, MessageType extends Message, ValidatableType extends ValidatableInterface> implements ReadonlyWrapperType<ValueType, MessageType, ValidatableType> {
    readonly valueContainer: ValueType;
    readonly messageContainer: MessageType;
    readonly validatableContainer: ValidatableType;
    constructor(valueContainer: ValueType, messageContainer: MessageType, validatableContainer: ValidatableType);
    get valid(): InferValidatable<ValidatableType>;
    get value(): InferValue<ValueType>;
    get message(): InferMessage<MessageType>;
}
export declare class ReadonlyWrapperObject<ValidatableType extends Dynamic> extends ReadonlyWrapperParameter<ValidatableType, ValidatableType, ValidatableType> {
    validatable: ValidatableType;
    constructor(validatable: ValidatableType);
}
declare namespace ReadonlyWrapper {
    type Type<ValueType extends Value, MessageType extends Message, ValidatableType extends ValidatableInterface> = ReadonlyWrapperType<ValueType, MessageType, ValidatableType>;
    const Parameter: typeof ReadonlyWrapperParameter;
    const Object: typeof ReadonlyWrapperObject;
}
export default ReadonlyWrapper;
