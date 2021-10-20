import InferMessage from "@dikac/t-message/message/infer";
import InferValue from "@dikac/t-value/value/infer";
import Validatable from "./validatable";
import InferValidatable from "@dikac/t-validatable/boolean/infer";

/**
 * read only wrapper for {@link Message}, {@link Value} and {@link ValidatableInterface}
 */

export default class ReadonlyWrapper<
    ValidatableType extends Validatable
> implements
    Readonly<Validatable<
        InferValue<ValidatableType>,
        InferMessage<ValidatableType>,
        InferValidatable<ValidatableType>
    >> {

    constructor(public validatable : ValidatableType) {}

    get valid() : InferValidatable<ValidatableType> {

        return <InferValidatable<ValidatableType>> this.validatable.valid;
    }

    get message() : InferMessage<ValidatableType> {

        return <InferMessage<ValidatableType>> this.validatable.message;
    }

    get value() : InferValue<ValidatableType> {

        return <InferValue<ValidatableType>> this.validatable.value;
    }
}
