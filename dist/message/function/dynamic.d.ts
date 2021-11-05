import DynamicParameter from "./dynamic-parameter";
import DynamicParameters from "./dynamic-parameters";
export declare namespace Dynamic {
    type Parameters<Base = unknown, MessageType = unknown, ExtraArgument extends unknown[] = unknown[]> = DynamicParameters<Base, MessageType, ExtraArgument>;
    type Parameter<Base = unknown, MessageType = unknown> = DynamicParameter<Base, MessageType>;
}
export default Dynamic;
