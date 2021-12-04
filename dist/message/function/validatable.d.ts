import ValidatableParameter from "./validatable-parameter";
import ValidatableParameters from "./validatable-parameters";
import DynamicValue from "../../value/validatable";
export declare namespace Validatable {
    type Parameters<Base = unknown, MessageType = unknown, ExtraArgument extends unknown[] = unknown[]> = ValidatableParameters<Base, MessageType, ExtraArgument>;
    type Parameter<Base = unknown, MessageType = unknown, ValidatableType extends DynamicValue<Base> = DynamicValue<Base>> = ValidatableParameter<Base, MessageType, ValidatableType>;
}
export default Validatable;
