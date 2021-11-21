import Validatable from "./validatable";
import Validation from "@dikac/t-boolean/validation/validation";
import Argument from "@dikac/t-function/argument/argument";
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
export interface CallbackClassParametersType<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Arguments extends unknown[] = unknown[]> extends Readonly<Validatable<ValueType, MessageType>>, Readonly<Validation<[ValueType, ...Arguments], boolean>>, Readonly<Argument<Arguments>> {
}
/**
 * main implementation
 *
 */
export default class CallbackClassParameters<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Arguments extends unknown[] = unknown[]> implements CallbackClassParametersType<ValueType, Type, MessageType, Arguments> {
    readonly value: Type;
    readonly validation: (value: ValueType, ...argument: Arguments) => boolean;
    readonly messageFactory: (value: ValueType, message: boolean, ...argument: Arguments) => MessageType;
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
    constructor(value: Type, validation: (value: ValueType) => boolean, messageFactory: (value: ValueType, message: boolean) => MessageType);
    constructor(value: Type, validation: (value: ValueType, ...argument: Arguments) => boolean, messageFactory: (value: ValueType, message: boolean, ...argument: Arguments) => MessageType, argument: Arguments);
    get valid(): boolean;
    get message(): MessageType;
}
