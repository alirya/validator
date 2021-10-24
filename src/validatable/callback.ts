import Value from "@dikac/t-value/value";
import BaseValidatable from "@dikac/t-validatable/validatable";
import Validatable from "./validatable";
import Message from "@dikac/t-message/message";
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";
import Validation from "@dikac/t-boolean/validation/validation";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import {ReadonlyWrapperObject, ReadonlyWrapperParameter, ReadonlyWrapperType} from "./readonly-wrapper";
import Guard from "@dikac/t-boolean/validation/guard";
import Return from "./simple";
import StrictOmit from "@dikac/t-object/strict-omit";

/**
 * assemble {@see Validatable} from value,
 * callback validation, and callback message
 *
 * this contain multiple class and function implementation
 *
 * function implementation version offer
 * more accurate type
 */
export default Callback;

/**
 * class type
 */
export interface CallbackType<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown
> extends
    Readonly<Validatable<ValueType, MessageType>>,
    Readonly<Validation<[ValueType], boolean>> {}

/**
 * class object argument
 */
export type CallbackArgument<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown
> =
    Readonly<Value<Type> &
    {validation:(value:ValueType)=>boolean} &
    Message<(result:Readonly<Value<ValueType> & BaseValidatable<boolean>>)=> MessageType>>


/**
 * main implementation
 *
 */
export class CallbackParameter<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
> implements CallbackType<ValueType, Type, MessageType> {

    /**
     *
     * @param value
     * value to be validated by {@param validation}
     *
     * @param validation
     *
     * @param messageFactory
     * to generate message
     */
    constructor(
        readonly value : Type,
        readonly validation : (value:ValueType)=>boolean,
        readonly messageFactory : (result:Readonly<StrictOmit<Validatable<ValueType>,'message'>>)=> MessageType,
    ) {}

    @MemoizeAccessor()
    get valid() {

        return this.validation(this.value);
    }

    @MemoizeAccessor()
    get message() {

        return this.messageFactory(this);
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
    } : CallbackArgument<ValueType, Type, MessageType>) {

        super(value, validation, message);
    }

}

/**
 * namespace aliases
 */
namespace Callback {

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

        export type Argument<
            ValueType = unknown,
            Type extends ValueType = ValueType,
            MessageType = unknown
        > = CallbackFunctionArgument<
            ValueType,
            Type,
            MessageType
        >
    }
}


export type CallbackFunctionArgument<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
> = Value<ValueType> &
    Message<(result:Readonly<StrictOmit<Validatable<ValueType>,'message'>>)=> MessageType>;

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
      } : CallbackFunctionArgument<ValueType, Type, MessageType> & Guard<ValueType, Type>
) : CallbackFunctionType<ValueType, Type, MessageType>

export function CallbackFunctionObject<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    >({
          value,
          validation,
          message
      } : CallbackFunctionArgument<ValueType, Type, MessageType> & Validation<[ValueType], boolean>
) : CallbackFunctionType<ValueType, Type, MessageType>
/**
 * destructure argument implementation for function
 */
export function CallbackFunctionObject<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
    >({
          value,
          validation,
          message
    } : CallbackFunctionArgument<ValueType, Type, MessageType> & Validation<[ValueType], boolean>
) :  Readonly<Value<ValueType> & BaseValidatable<boolean> & Message<MessageType>> {

    return new CallbackParameter(value, validation, message)
}



export function CallbackFunctionParameter<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
>(
    value : ValueType,
    validation : (value:ValueType)=>value is Type,
    message : (result:Readonly<StrictOmit<Validatable<ValueType>,'message'>>)=> MessageType,
) : CallbackFunctionType<ValueType, Type, MessageType>

export function CallbackFunctionParameter<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
>(
    value : Type,
    validation : (value:ValueType)=>boolean,
    message : (result:Readonly<StrictOmit<Validatable<ValueType>,'message'>>)=> MessageType,
) : CallbackFunctionType<ValueType, Type, MessageType>


/**
 * parameter argument implementation for function
 */
export function CallbackFunctionParameter<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
>(
    value : ValueType,
    validation : (value:ValueType)=>boolean,
    message : (result:Readonly<Value<ValueType> & BaseValidatable<boolean>>)=> MessageType,
) :  Readonly<Value<ValueType> & BaseValidatable<boolean> & Message<MessageType>> {

    return new CallbackParameter(value, validation, message)
}

