import CallbackClassParameters from './callback-class-parameters';
import Value from '@alirya/value/value';
import Validation from '@alirya/boolean/validation/validation';
import ValidationFunction from '@alirya/boolean/function/validation';
import Argument from '@alirya/function/argument/argument';
import Message from '@alirya/message/message';
import ValidatableParameter from '../message/function/validatable-parameter';
import Guard from '@alirya/boolean/validation/guard';
import Dynamic from '../value/validatable';


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

type CallbackClassParameterArgument<
    ValueType = unknown,
    Type = unknown,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
    Boolean extends boolean = boolean
> =
    Value<ValueType> &
    Readonly<Argument<Arguments>> &
    Message<ValidatableParameter<ValueType, MessageType, Dynamic<ValueType, Boolean> &
    Partial<Argument<Arguments>>>>;

export type CallbackClassParameterArgumentValidation<
    ValueType = unknown,
    Type = unknown,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
    Boolean extends boolean = boolean
> =
    CallbackClassParameterArgument<ValueType, Type, MessageType, Arguments, Boolean> &
    Validation<[ValueType, ...Arguments], Boolean>;



export type CallbackClassParameterArgumentGuard<
    ValueType = unknown,
    Type = unknown,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
    Boolean extends boolean = boolean
> =
    CallbackClassParameterArgument<ValueType, Type, MessageType, Arguments, Boolean> & Guard<ValueType, Type, Arguments>;

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
    Type = unknown,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
    Boolean extends boolean = boolean
    > extends CallbackClassParameters<ValueType, MessageType, Arguments, Boolean> {

    constructor({
                    value,
                    validation,
                    message,
                    argument = ([] as Arguments|[] as Arguments)
                } : CallbackClassParameterArgumentValidation<ValueType, Type, MessageType, Arguments, Boolean>|CallbackClassParameterArgumentGuard<ValueType, Type, MessageType, Arguments, Boolean>) {

        super(value,
            ((value, ...argument) => validation(value, ...argument)) as ValidationFunction<[ValueType, ...Arguments], Boolean>,
            ()=>message(this),
            argument
        );
    }
}


