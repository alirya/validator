import ValidatableInvalid from "@dikac/t-validatable/error/invalid";
import Validatable from "../validatable";
import Infer from "@dikac/t-message/message/infer";
import Message from "@dikac/t-message/message";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import StrictOmit from "@dikac/t-object/strict-omit";
import New from "@dikac/t-function/new";
import Value from "@dikac/t-value/value";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import {ReadonlyWrapperObject, ReadonlyWrapperParameter, ReadonlyWrapperType} from "../readonly-wrapper";

export default InvalidStringMessage;
namespace InvalidStringMessage {

    export const Parameter = InvalidStringMessageParameter;
    export const Object = InvalidStringMessageObject;
    export type Argument<ValidatableType extends Validatable, Error extends globalThis.Error> =
        InvalidStringMessageArgument<ValidatableType , Error>;
}


const defaultError = New(ValidatableInvalid.Parameter);

/**
 * @param validatable
 *
 * @param message
 * message conversion
 * default : {@see JSON.stringify}
 *
 * @param error
 * error object factory
 * default : {@see ValidatableInvalid}
 */

export type InvalidStringMessageArgument<ValidatableType extends Validatable, Error extends globalThis.Error> =
    ValidatableContainer<ValidatableType> &
    Message<(validatable: Infer<ValidatableType>) => string> &
    {error: (validatable: ValidatableType, message : string) => Error}
    //{error: (a : ValidatableContainer<ValidatableType> & Message<string>) => Error}

export function InvalidStringMessageObject<ValidatableType extends Validatable>({
        validatable
  } : Pick<InvalidStringMessageArgument<ValidatableType, globalThis.Error>, 'validatable'>
) : globalThis.Error;

export function InvalidStringMessageObject<ValidatableType extends Validatable>({
        validatable,
        message,
  } : StrictOmit<InvalidStringMessageArgument<ValidatableType, globalThis.Error>, 'error'>
) : globalThis.Error;

export function InvalidStringMessageObject<ValidatableType extends Validatable, Error extends globalThis.Error>({
        validatable,
        message,
        error,
  } : InvalidStringMessageArgument<ValidatableType, Error>
) : Error;

export function InvalidStringMessageObject<ValidatableType extends Validatable, Error extends globalThis.Error>({
      validatable,
      message = JSON.stringify,
      error = defaultError,
  } : InvalidStringMessageArgument<ValidatableType, Error|globalThis.Error>
) : Error|globalThis.Error {

    return InvalidStringMessageParameter(validatable, message, error);
}


export function InvalidStringMessageParameter<ValidatableType extends Validatable>(
    validatable: ValidatableType,
    message ?: (validatable: Infer<ValidatableType>) => string,
) : globalThis.Error;

export function InvalidStringMessageParameter<ValidatableType extends Validatable, Error extends globalThis.Error>(
    validatable: ValidatableType,
    message ?: (validatable: Infer<ValidatableType>) => string,
    error ?: (validatable: ValidatableType, message : string) => Error
) : Error;

export function InvalidStringMessageParameter<ValidatableType extends Validatable, Error extends globalThis.Error>(
    validatable: ValidatableType,
    message : (validatable: Infer<ValidatableType>) => string = JSON.stringify,
    error : (validatable: ValidatableType, message : string) => Error|globalThis.Error = defaultError
) : Error|globalThis.Error {

    return error(validatable, message(validatable.message as Infer<ValidatableType>))
}

