import CallbackClassParameters from "./callback-class-parameters";
import { CallbackFunctionArgumentValidation } from "./callback-function-parameter";
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
 * class object argument
 */
export declare type CallbackClassParameterArgument<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Arguments extends unknown[] = unknown[]> = CallbackFunctionArgumentValidation<ValueType, Type, MessageType, Arguments>;
/**
 * class object argument
 */
/**
 * main implementation
 *
 */
/**
 * destructure argument version
 */
/**
 * destructure argument version
 */
export default class CallbackClassParameter<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> extends CallbackClassParameters<ValueType, Type, MessageType> {
    constructor({ value, validation, message, argument }: CallbackClassParameterArgument<ValueType, Type, MessageType>);
}
