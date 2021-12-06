import CallbackClassParameters, {CallbackClassType} from "./callback-class-parameters";
import {
    CallbackClassParameterArgumentGuard,
    CallbackClassParameterArgumentValidation
} from "./callback-class-parameter";
import CallbackClassParameter from "./callback-class-parameter";


namespace CallbackClass {

    export const Parameter = CallbackClassParameter;
    export const Parameters = CallbackClassParameters;
    export type Type<
        ValueType = unknown,
        MessageType = unknown,
        Arguments extends unknown[]= unknown[],
        Boolean extends boolean = boolean
    > = CallbackClassType<ValueType, MessageType, Arguments, Boolean>;

    export type ArgumentValidationValidation<
        ValueType = unknown,
        Type = unknown,
        MessageType = unknown,
        Arguments extends unknown[] = unknown[],
        Boolean extends boolean = boolean
    > = CallbackClassParameterArgumentValidation<ValueType, Type, MessageType, Arguments, Boolean>;
    export type ArgumentValidationGuard<
        ValueType = unknown,
        Type = unknown,
        MessageType = unknown,
        Arguments extends unknown[] = unknown[],
        Boolean extends boolean = boolean
    > = CallbackClassParameterArgumentGuard<ValueType, Type, MessageType, Arguments, Boolean>;
}

export default CallbackClass;


