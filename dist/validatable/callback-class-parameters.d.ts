import Validatable from "./validatable";
import Validation from "@dikac/t-boolean/validation/validation";
import Argument from "@dikac/t-function/argument/argument";
import DynamicParameters from "../message/function/dynamic-parameters";
/**
 * class type
 */
/**
 * assemble {@see Validatable} from value,
 * callback validation, and callback message
 *
 * this contain multiple class and function implementation
 *
 * function implementation version offer
 * more accurate type
 */
/**
 * main implementation
 *
 */
export declare type CallbackClassParametersType<ValueType = unknown, MessageType = unknown, Arguments extends unknown[] = unknown[], Boolean extends boolean = boolean> = Validatable<ValueType, MessageType> & Validation<[ValueType, ...Arguments], Boolean> & Argument<Arguments>;
/**
 * main implementation
 *
 */
export default class CallbackClassParameters<ValueType = unknown, MessageType = unknown, Arguments extends unknown[] = unknown[], Boolean extends boolean = boolean> implements CallbackClassParametersType<ValueType, MessageType, Arguments, Boolean> {
    readonly value: ValueType;
    readonly validation: (value: ValueType, ...argument: Arguments) => Boolean;
    readonly messageFactory: DynamicParameters<ValueType, MessageType, Arguments, Boolean>;
    readonly argument: Arguments;
    /**
     *
     * @param value
     * value to be validated by {@param validation}
     *
     * @param validation
     *
     * @param messageFactory
     * to generate message
     *
     * @param argument
     */
    constructor(value: ValueType, validation: (value: ValueType, ...argument: Arguments) => Boolean, messageFactory: DynamicParameters<ValueType, MessageType, Arguments, Boolean>, argument: Arguments);
    get valid(): Boolean;
    get message(): MessageType;
}
