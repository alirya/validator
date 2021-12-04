import Dynamic from "../../value/validatable";
export declare type ValidatableParameter<Base = unknown, MessageType = unknown, ValidatableType extends Dynamic<Base> = Dynamic<Base>> = <Argument extends Base>(argument: ValidatableType) => MessageType;
export default ValidatableParameter;
