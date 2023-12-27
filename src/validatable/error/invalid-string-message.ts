import {InvalidParameters} from '@axiona/validatable/error/invalid.js';
import Validatable from '../validatable.js';
import Infer from '@axiona/message/message/infer.js';
import New from '@axiona/function/new.js';
import Message from '@axiona/message/message.js';
import ValidatableContainer from '@axiona/validatable/validatable/validatable.js';
import StrictOmit from '@axiona/object/strict-omit.js';


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


export function InvalidStringMessageParameters<ValidatableType extends Validatable>(
    validatable: ValidatableType,
    message ?: (validatable: Infer<ValidatableType>) => string,
) : globalThis.Error;

export function InvalidStringMessageParameters<ValidatableType extends Validatable, Error extends globalThis.Error>(
    validatable: ValidatableType,
    message ?: (validatable: Infer<ValidatableType>) => string,
    error ?: (validatable: ValidatableType, message : string) => Error
) : Error;

export function InvalidStringMessageParameters<ValidatableType extends Validatable, Error extends globalThis.Error>(
    validatable: ValidatableType,
    message : (validatable: Infer<ValidatableType>) => string = JSON.stringify,
    error : (validatable: ValidatableType, message : string) => Error|globalThis.Error = New(InvalidParameters)
) : Error|globalThis.Error {

    return error(validatable, message(validatable.message as Infer<ValidatableType>));
}

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
    Partial<Message<(validatable: Infer<ValidatableType>) => string>> &
    {error ?: (validatable: ValidatableType, message : string) => Error};

export function InvalidStringMessageParameter<ValidatableType extends Validatable>({
        validatable
  } : Pick<InvalidStringMessageArgument<ValidatableType, globalThis.Error>, 'validatable'>
) : globalThis.Error;

export function InvalidStringMessageParameter<ValidatableType extends Validatable>({
        validatable,
        message,
  } : StrictOmit<InvalidStringMessageArgument<ValidatableType, globalThis.Error>, 'error'>
) : globalThis.Error;

export function InvalidStringMessageParameter<ValidatableType extends Validatable, Error extends globalThis.Error>({
        validatable,
        message,
        error,
  } : Required<InvalidStringMessageArgument<ValidatableType, Error>>
) : Error;

export function InvalidStringMessageParameter<ValidatableType extends Validatable, Error extends globalThis.Error>({
      validatable,
      message,
      error = New(InvalidParameters),
  } : InvalidStringMessageArgument<ValidatableType, Error|globalThis.Error>
) : Error|globalThis.Error {

    return InvalidStringMessageParameters(validatable, message, error);
}



namespace InvalidStringMessage {
    export const Parameters = InvalidStringMessageParameters;
    export const Parameter = InvalidStringMessageParameter;
}
export default InvalidStringMessage;
