import Validatable from "./validatable";
import Validation from "@dikac/t-boolean/validation/validation";
import ValidationFunction from "@dikac/t-boolean/function/validation";
import Argument from "@dikac/t-function/argument/argument";
import ValidatableParameters from "../message/function/validatable-parameters";
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
export declare type CallbackClassType<ValueType = unknown, MessageType = unknown, Arguments extends unknown[] = unknown[], Boolean extends boolean = boolean> = Validatable<ValueType, MessageType> & Validation<[ValueType, ...Arguments], Boolean> & Argument<Arguments>;
/**
 * main implementation
 *
 */
export default class CallbackClassParameters<ValueType = unknown, MessageType = unknown, Arguments extends unknown[] = unknown[], Boolean extends boolean = boolean> implements CallbackClassType<ValueType, MessageType, Arguments, Boolean> {
    readonly value: ValueType;
    readonly validation: ValidationFunction<[ValueType, ...Arguments], Boolean>;
    readonly messageFactory: ValidatableParameters<ValueType, MessageType, Arguments, Boolean>;
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
    constructor(value: ValueType, validation: ValidationFunction<[ValueType], Boolean>, messageFactory: ValidatableParameters<ValueType, MessageType, [], Boolean>);
    constructor(value: ValueType, validation: ValidationFunction<[ValueType, ...Arguments], Boolean>, messageFactory: ValidatableParameters<ValueType, MessageType, Arguments, Boolean>, argument: Arguments);
    get valid(): Boolean;
    get message(): MessageType;
}
