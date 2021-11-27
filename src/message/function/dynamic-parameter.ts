import Dynamic from "../../value/dynamic";

export type DynamicParameter<
    Base = unknown,
    MessageType = unknown,
    ValidatableType extends Dynamic<Base> = Dynamic<Base>
> =
    <Argument extends Base>(argument: ValidatableType) => MessageType

export default DynamicParameter;
