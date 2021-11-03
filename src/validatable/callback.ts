import Value from "@dikac/t-value/value";
import BaseValidatable from "@dikac/t-validatable/validatable";
import Dynamic from "./dynamic";
import Message from "@dikac/t-message/message";
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";
import Validation from "@dikac/t-boolean/validation/validation";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import {ReadonlyWrapperObject, ReadonlyWrapperParameter, ReadonlyWrapperType} from "./readonly-wrapper";
import Guard from "@dikac/t-boolean/validation/guard";
import Return from "./simple";
import StrictOmit from "@dikac/t-object/strict-omit";
import Argument from "@dikac/t-function/argument/argument";
import {Optional, Writable} from "utility-types";

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
export interface CallbackType<
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
 * class object argument
 */
export type CallbackArgument<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Arguments extends unknown[]= unknown[]
    > = CallbackFunctionArgumentValidation<ValueType, Type, MessageType, Arguments>;

/**
 * main implementation
 *
 */
export class CallbackParameter<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[]
    > implements CallbackType<ValueType, Type, MessageType, Arguments> {

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

/**
 * destructure argument version
 */
export class CallbackObject<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    > extends CallbackParameter<ValueType, Type, MessageType> {

    constructor({
        value,
        validation,
        message,
        argument
    } : CallbackArgument<ValueType, Type, MessageType>) {

        super(value, validation, ()=>message(this), argument);
    }

}

export type CallbackFunctionArgumentGuard<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[]
    > =
    Value<Type> &
    Readonly<Argument<Arguments>> &
    Guard<ValueType, Type> &
    Message<(result:Readonly<StrictOmit<Dynamic<ValueType>,'message'>>)=> MessageType>;

export type CallbackFunctionArgumentValidation<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[]
    > =
    Value<Type> &
    Validation<[ValueType], boolean> &
    Readonly<Argument<Arguments>> &
    Message<(result:Readonly<StrictOmit<Dynamic<ValueType>,'message'>>)=> MessageType>;

export type CallbackFunctionType<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown
    > =
    Return<ValueType, ValueType, Type, Readonly<Value<ValueType> & BaseValidatable & Message<MessageType>>>


export function CallbackFunctionObject<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    >({
          value,
          validation,
          message
      } : CallbackFunctionArgumentGuard<ValueType, Type, MessageType>
) : CallbackFunctionType<ValueType, Type, MessageType>

export function CallbackFunctionObject<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    >({
          value,
          validation,
          message
      } : CallbackFunctionArgumentValidation<ValueType, Type, MessageType>
) : CallbackFunctionType<ValueType, Type, MessageType>
/**
 * destructure argument implementation for function
 */
export function CallbackFunctionObject<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Argument extends unknown[] = unknown[],
    >(argument : CallbackFunctionArgumentValidation<ValueType, Type, MessageType, Argument> & Validation<[ValueType], boolean>
) :  Readonly<Value<ValueType> & BaseValidatable<boolean> & Message<MessageType>>;

export function CallbackFunctionObject<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    >(argument : StrictOmit<CallbackFunctionArgumentValidation<ValueType, Type, MessageType, []>, 'argument'> & Validation<[ValueType], boolean>
) :  Readonly<Value<ValueType> & BaseValidatable<boolean> & Message<MessageType>>;


export function CallbackFunctionObject<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Argument extends unknown[] = unknown[],
>(argument : Writable<Optional<CallbackFunctionArgumentValidation<ValueType, Type, MessageType, Argument>, 'argument'>> & Validation<[ValueType], boolean>
) :  Readonly<Value<ValueType> & BaseValidatable<boolean> & Message<MessageType>> {

    if(!argument.argument) {
        argument.argument = [] as any;
    }

    return new CallbackObject(argument as CallbackFunctionArgumentValidation<ValueType, Type, MessageType, Argument>)
}

export function CallbackFunctionParameter<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Argument extends unknown[] = unknown[],
>(
    value : ValueType,
    validation : (value:ValueType)=>value is Type,
    message : (value:ValueType, message: boolean)=> MessageType,
    argument ?: Argument,
) : CallbackFunctionType<ValueType, Type, MessageType>

export function CallbackFunctionParameter<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Argument extends unknown[] = unknown[],
>(
    value : Type,
    validation : (value:ValueType)=>boolean,
    message : (value:ValueType, message: boolean)=> MessageType,
    argument ?: Argument,
) : CallbackFunctionType<ValueType, Type, MessageType>


/**
 * parameter argument implementation for function
 */
export function CallbackFunctionParameter<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    Argument extends unknown[] = unknown[],
>(
    value : ValueType,
    validation : (value:ValueType)=>boolean,
    message : (value:ValueType, message: boolean)=> MessageType,
    argument : Argument|[] = [],
) :  Readonly<Dynamic<ValueType, MessageType>> {

    return new CallbackParameter(value, validation, message, argument)
}


/**
 * namespace aliases
 */
namespace Callback {

    export namespace Class {
        export const Parameter = CallbackParameter;
        export const Object = CallbackObject;

        export type Type<
            ValueType = unknown,
            Type extends ValueType = ValueType,
            MessageType = unknown,
            > =
            CallbackType<ValueType, Type, MessageType>;

        export type Argument<
            ValueType = unknown,
            Type extends ValueType = ValueType,
            MessageType = unknown
            > = CallbackArgument<
            ValueType,
            Type,
            MessageType
            >
    }


    export namespace Function {

        export const Parameter = CallbackFunctionParameter;
        export const Object = CallbackFunctionObject;

        export type Type<
            ValueType = unknown,
            Type extends ValueType = ValueType,
            MessageType = unknown,
            > =
            CallbackFunctionType<
                ValueType,
                Type,
                MessageType
                >;

        export type ArgumentGuard<
            ValueType = unknown,
            Type extends ValueType = ValueType,
            MessageType = unknown,
            Arguments extends unknown[] = unknown[]
        > = CallbackFunctionArgumentGuard<
            ValueType,
            Type,
            MessageType,
            Arguments
        >

        export type ArgumentValidation<
            ValueType = unknown,
            Type extends ValueType = ValueType,
            MessageType = unknown,
            Arguments extends unknown[] = unknown[]
        > = CallbackFunctionArgumentValidation<
            ValueType,
            Type,
            MessageType,
            Arguments
        >
    }
}


export default Callback;
