import { CallbackFunctionType } from "./callback-function-parameters";
import CallbackFunctionParameter, { CallbackFunctionParameterArgumentGuard, CallbackFunctionParameterArgumentValidation } from "./callback-function-parameter";
import CallbackFunctionParameters from "./callback-function-parameters";
declare namespace CallbackFunction {
    const Parameter: typeof CallbackFunctionParameter;
    const Parameters: typeof CallbackFunctionParameters;
    type Type<ValueType = unknown, Type = unknown, MessageType = unknown> = CallbackFunctionType<ValueType, Type, MessageType>;
    type ArgumentValidationValidation<ValueType = unknown, Type = unknown, MessageType = unknown, Arguments extends unknown[] = unknown[], Boolean extends boolean = boolean> = CallbackFunctionParameterArgumentValidation<ValueType, Type, MessageType, Arguments, Boolean>;
    type ArgumentValidationGuard<ValueType = unknown, Type = unknown, MessageType = unknown, Arguments extends unknown[] = unknown[], Boolean extends boolean = boolean> = CallbackFunctionParameterArgumentGuard<ValueType, Type, MessageType, Arguments, Boolean>;
}
export default CallbackFunction;
