import CallbackClassParameters, { CallbackClassType } from "./callback-class-parameters";
import { CallbackClassParameterArgumentGuard, CallbackClassParameterArgumentValidation } from "./callback-class-parameter";
import CallbackClassParameter from "./callback-class-parameter";
declare namespace CallbackClass {
    const Parameter: typeof CallbackClassParameter;
    const Parameters: typeof CallbackClassParameters;
    type Type<ValueType = unknown, MessageType = unknown, Arguments extends unknown[] = unknown[], Boolean extends boolean = boolean> = CallbackClassType<ValueType, MessageType, Arguments, Boolean>;
    type ArgumentValidationValidation<ValueType = unknown, Type = unknown, MessageType = unknown, Arguments extends unknown[] = unknown[], Boolean extends boolean = boolean> = CallbackClassParameterArgumentValidation<ValueType, Type, MessageType, Arguments, Boolean>;
    type ArgumentValidationGuard<ValueType = unknown, Type = unknown, MessageType = unknown, Arguments extends unknown[] = unknown[], Boolean extends boolean = boolean> = CallbackClassParameterArgumentGuard<ValueType, Type, MessageType, Arguments, Boolean>;
}
export default CallbackClass;
