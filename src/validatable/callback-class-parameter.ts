import CallbackClassParameters from "./callback-class-parameters";
import {CallbackFunctionArgumentValidation} from "./callback-function-parameter";
import Value from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
import Argument from "@dikac/t-function/argument/argument";
import Message from "@dikac/t-message/message";
import StrictOmit from "@dikac/t-object/strict-omit";
import Validatable from "./validatable";
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
// export type CallbackClassParameterArgument<
//     ValueType = unknown,
//     Type extends ValueType = ValueType,
//     MessageType = unknown,
//     Arguments extends unknown[]= unknown[]
//     > = CallbackFunctionArgumentValidation<ValueType, Type, MessageType, Arguments>;

export type CallbackClassParameterArgument<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
    Boolean extends boolean = boolean
    > =
    Value<Type> &
    Validation<[ValueType, ...Arguments], Boolean> &
    Readonly<Argument<Arguments>> &
    Message<DynamicParameters<ValueType, MessageType, Arguments, Boolean>>;

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
export default class CallbackClassParameter<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
    Boolean extends boolean = boolean
    > extends CallbackClassParameters<ValueType, MessageType, Arguments, Boolean> {

    constructor({
                    value,
                    validation,
                    message,
                    argument
                } : CallbackClassParameterArgument<ValueType, Type, MessageType, Arguments, Boolean>) {

        super(value,
            (value, ...argument) => validation(value, ...argument),
            ()=>message(this),
            argument
        );
    }

}


