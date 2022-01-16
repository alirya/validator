import ValidatableInvalid from '@alirya/validatable/error/invalid-parameters';
import Validatable from '../validatable';
import Infer from '@alirya/message/message/infer';
import Message from '@alirya/message/message';
import ValidatableContainer from '@alirya/validatable/validatable/validatable';
import StrictOmit from '@alirya/object/strict-omit';
import New from '@alirya/function/new';
import InvalidStringMessageParameters from './invalid-string-message-parameters';

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

export type InvalidStringMessageParameterArgument<ValidatableType extends Validatable, Error extends globalThis.Error> =
    ValidatableContainer<ValidatableType> &
    Partial<Message<(validatable: Infer<ValidatableType>) => string>> &
    {error ?: (validatable: ValidatableType, message : string) => Error};

export default function InvalidStringMessageParameter<ValidatableType extends Validatable>({
        validatable
  } : Pick<InvalidStringMessageParameterArgument<ValidatableType, globalThis.Error>, 'validatable'>
) : globalThis.Error;

export default function InvalidStringMessageParameter<ValidatableType extends Validatable>({
        validatable,
        message,
  } : StrictOmit<InvalidStringMessageParameterArgument<ValidatableType, globalThis.Error>, 'error'>
) : globalThis.Error;

export default function InvalidStringMessageParameter<ValidatableType extends Validatable, Error extends globalThis.Error>({
        validatable,
        message,
        error,
  } : Required<InvalidStringMessageParameterArgument<ValidatableType, Error>>
) : Error;

export default function InvalidStringMessageParameter<ValidatableType extends Validatable, Error extends globalThis.Error>({
      validatable,
      message,
      error = New(ValidatableInvalid),
  } : InvalidStringMessageParameterArgument<ValidatableType, Error|globalThis.Error>
) : Error|globalThis.Error {

    return InvalidStringMessageParameters(validatable, message, error);
}

