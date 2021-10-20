import InferMessage from "@dikac/t-message/message/infer";
import InferValue from "@dikac/t-value/value/infer";
import Validatable from "./validatable";
import InferValidatable from "@dikac/t-validatable/boolean/infer";
/**
 * read only wrapper for {@link Message}, {@link Value} and {@link ValidatableInterface}
 */
export default class ReadonlyWrapper<ValidatableType extends Validatable> implements Readonly<Validatable<InferValue<ValidatableType>, InferMessage<ValidatableType>, InferValidatable<ValidatableType>>> {
    validatable: ValidatableType;
    constructor(validatable: ValidatableType);
    get valid(): InferValidatable<ValidatableType>;
    get message(): InferMessage<ValidatableType>;
    get value(): InferValue<ValidatableType>;
}
