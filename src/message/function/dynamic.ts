import DynamicParameter from "./dynamic-parameter";
import DynamicParameters from "./dynamic-parameters";

export namespace Dynamic {

    export type Parameters<
        Base = unknown,
        MessageType = unknown,
        ExtraArgument extends unknown[] = unknown[]
        > = DynamicParameters<Base, MessageType, ExtraArgument>;

    export type Parameter<
        Base = unknown,
        MessageType = unknown
        > = DynamicParameter<Base, MessageType>;
}


export default Dynamic;
