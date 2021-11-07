import DynamicParameter from "./dynamic-parameter";
import DynamicParameters from "./dynamic-parameters";
import DynamicValue from "../../value/dynamic";

export namespace Dynamic {

    export type Parameters<
        Base = unknown,
        MessageType = unknown,
        ExtraArgument extends unknown[] = unknown[]
        > = DynamicParameters<Base, MessageType, ExtraArgument>;

    export type Parameter<
        Base = unknown,
        MessageType = unknown,
        ValidatableType extends DynamicValue<Base> = DynamicValue<Base>
        > = DynamicParameter<Base, MessageType, ValidatableType>;
}


export default Dynamic;
