import Validatable from "./validatable";
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";
import Validation from "@dikac/t-boolean/validation/validation";
import Argument from "@dikac/t-function/argument/argument";
import StaticParameters from "../message/function/static-parameters";
import DynamicParameters from "../message/function/dynamic-parameters";
import Message from "@dikac/t-message/message";


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
export type CallbackClassParametersType<
    ValueType = unknown,
    MessageType = unknown,
    Arguments extends unknown[]= unknown[],
    Boolean extends boolean = boolean
> =
    Validatable<ValueType, MessageType> &
    Validation<[ValueType, ...Arguments], Boolean> &
    Argument<Arguments>


/**
 * main implementation
 *
 */
export default class CallbackClassParameters<
    ValueType = unknown,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
    Boolean extends boolean = boolean
    > implements CallbackClassParametersType<ValueType, MessageType, Arguments, Boolean> {

    readonly argument : Arguments;

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
    // constructor(
    //     value : ValueType,
    //     validation : (value:ValueType)=>boolean,
    //     messageFactory : (value:ValueType, message: boolean)=> MessageType,
    // );
    // constructor(
    //     value : ValueType,
    //     validation : (value:ValueType, ...argument:Arguments)=>boolean,
    //     messageFactory : (value:ValueType, message: boolean, ...argument:Arguments)=> MessageType,
    //     argument : Arguments,
    // )
    constructor(
        readonly value : ValueType,
        readonly validation : (value:ValueType, ...argument:Arguments)=>Boolean,
        readonly messageFactory : DynamicParameters<ValueType, MessageType, Arguments, Boolean>,
        argument : Arguments,
    ) {
        this.argument = (argument ?? []) as Arguments;
    }

    @MemoizeAccessor()
    get valid() : Boolean {

        return this.validation(this.value, ...(this.argument as Arguments)) as Boolean;
    }

    @MemoizeAccessor()
    get message() : MessageType {

        return this.messageFactory(this.value, this.valid, ...(this.argument as Arguments));
    }
}
