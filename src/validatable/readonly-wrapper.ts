import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import ReadonlyWrapperParameters, {ReadonlyWrapperType} from "./readonly-wrapper-parameters";
import ReadonlyWrapperParameter from "./readonly-wrapper-parameter";

/**
 * read only wrapper for {@link Message}, {@link Value} and {@link ValidatableInterface}
 */

namespace ReadonlyWrapper {

    export type Type<
        ValueType extends Value,
        MessageType extends Message,
        ValidatableType extends ValidatableInterface
    > =
        ReadonlyWrapperType<ValueType, MessageType, ValidatableType>;

    export const Parameters = ReadonlyWrapperParameters;
    export const Parameter = ReadonlyWrapperParameter;

}

export default ReadonlyWrapper;
