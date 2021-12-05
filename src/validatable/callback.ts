import CallbackClassParameter, {CallbackClassParameterArgumentGuard, CallbackClassParameterArgumentValidation} from "./callback-class-parameter";
import CallbackClassParameters, {CallbackClassParametersType} from "./callback-class-parameters";
import CallbackFunctionParameters, {CallbackFunctionType} from "./callback-function-parameters";
import CallbackFunctionParameter from "./callback-function-parameter";
import {CallbackFunctionParameterArgumentGuard, CallbackFunctionParameterArgumentValidation} from "./callback-function-parameter";

/**
 * assemble {@see Dynamic} from value,
 * callback validation, and callback message
 *
 * this contain multiple class and function implementation
 *
 * function implementation version offer
 * more accurate type
 */


/**
 * class type
 */

/**
 * namespace aliases
 */
namespace Callback {

    export namespace Class {
        export const Parameter = CallbackClassParameter;
        export const Parameters = CallbackClassParameters;

        export type Type<
            ValueType = unknown,
            MessageType = unknown,
            > =
            CallbackClassParametersType<ValueType, MessageType>;

        export type ArgumentGuard<
            ValueType = unknown,
            Type = unknown,
            MessageType = unknown
            > = CallbackClassParameterArgumentGuard<
            ValueType,
            Type,
            MessageType
            >

        export type ArgumentValidation<
            ValueType = unknown,
            Type = unknown,
            MessageType = unknown
            > = CallbackClassParameterArgumentValidation<
            ValueType,
            Type,
            MessageType
            >
    }


    export namespace Function {

        export const Parameter = CallbackFunctionParameter;
        export const Parameters = CallbackFunctionParameters;

        export type Type<
            ValueType = unknown,
            Type = unknown,
            MessageType = unknown,
            > =
            CallbackFunctionType<
                ValueType,
                Type,
                MessageType
                >;

        export type ArgumentGuard<
            ValueType = unknown,
            Type = unknown,
            MessageType = unknown,
            Arguments extends unknown[] = unknown[]
        > = CallbackFunctionParameterArgumentGuard<
            ValueType,
            Type,
            MessageType,
            Arguments
        >

        export type ArgumentValidation<
            ValueType = unknown,
            Type = unknown,
            MessageType = unknown,
            Arguments extends unknown[] = unknown[]
        > = CallbackFunctionParameterArgumentValidation<
            ValueType,
            Type,
            MessageType,
            Arguments
        >
    }
}


export default Callback;
