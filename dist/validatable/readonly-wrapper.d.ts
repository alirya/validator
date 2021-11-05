import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import ReadonlyWrapperParameters, { ReadonlyWrapperType } from "./readonly-wrapper-parameters";
import ReadonlyWrapperParameter from "./readonly-wrapper-parameter";
/**
 * read only wrapper for {@link Message}, {@link Value} and {@link ValidatableInterface}
 */
declare namespace ReadonlyWrapper {
    type Type<ValueType extends Value, MessageType extends Message, ValidatableType extends ValidatableInterface> = ReadonlyWrapperType<ValueType, MessageType, ValidatableType>;
    const Parameters: typeof ReadonlyWrapperParameters;
    const Parameter: typeof ReadonlyWrapperParameter;
}
export default ReadonlyWrapper;
