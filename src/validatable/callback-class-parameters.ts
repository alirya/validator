import Dynamic from "./dynamic";
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";
import Validation from "@dikac/t-boolean/validation/validation";
import Argument from "@dikac/t-function/argument/argument";


/**
 * class type
 */


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
 * main implementation
 *
 */
export interface CallbackClassParametersType<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Arguments extends unknown[]= unknown[]
    > extends
    Readonly<Dynamic<ValueType, MessageType>>,
    Readonly<Validation<[ValueType, ...Arguments], boolean>>,
    Readonly<Argument<Arguments>>
{}

/**
 * main implementation
 *
 */
export default class CallbackClassParameters<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[]
    > implements CallbackClassParametersType<ValueType, Type, MessageType, Arguments> {

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
    constructor(
        readonly value : Type,
        readonly validation : (value:ValueType, ...argument:Arguments)=>boolean,
        readonly messageFactory : (value:ValueType, message: boolean, ...argument:Arguments)=> MessageType,
        readonly argument : Arguments,
    ) {}

    @MemoizeAccessor()
    get valid() {

        return this.validation(this.value, ...this.argument);
    }

    @MemoizeAccessor()
    get message() {

        return this.messageFactory(this.value, this.valid, ...this.argument);
    }
}
