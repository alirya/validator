import CallbackClassParameters from "./callback-class-parameters";
import Value from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
import Argument from "@dikac/t-function/argument/argument";
import Message from "@dikac/t-message/message";
import DynamicParameters from "../message/function/dynamic-parameters";
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
export declare type CallbackClassParameterArgument<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Arguments extends unknown[] = unknown[], Boolean extends boolean = boolean> = Value<Type> & Validation<[ValueType, ...Arguments], Boolean> & Readonly<Argument<Arguments>> & Message<DynamicParameters<ValueType, MessageType, Arguments, Boolean>>;
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
export default class CallbackClassParameter<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Arguments extends unknown[] = unknown[], Boolean extends boolean = boolean> extends CallbackClassParameters<ValueType, MessageType, Arguments, Boolean> {
    constructor({ value, validation, message, argument }: CallbackClassParameterArgument<ValueType, Type, MessageType, Arguments, Boolean>);
}
