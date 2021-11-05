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

export interface ReadonlyWrapperType<
    ValueType extends Value,
    MessageType extends Message,
    ValidatableType extends ValidatableInterface,
> extends Readonly<Dynamic<
        InferValue<ValueType>,
        InferMessage<MessageType>,
        InferValidatable<ValidatableType>
>> {
    readonly valueContainer: ValueType,
    readonly messageContainer: MessageType,
    readonly validatableContainer: ValidatableType,
}

export default class ReadonlyWrapperParameters<
    ValueType extends Value,
    MessageType extends Message,
    ValidatableType extends ValidatableInterface,
>
    implements ReadonlyWrapperType<ValueType, MessageType, ValidatableType>
{
    constructor(
        readonly valueContainer: ValueType,
        readonly messageContainer: MessageType,
        readonly validatableContainer: ValidatableType,
    ) {
    }

    get valid() : InferValidatable<ValidatableType> {

        return <InferValidatable<ValidatableType>>this.validatableContainer.valid;
    }


    get value() : InferValue<ValueType> {

        return <InferValue<ValueType>> this.valueContainer.value;
    }

    get message(): InferMessage<MessageType> {

        return <InferMessage<MessageType>> this.messageContainer.message;
    }
}

