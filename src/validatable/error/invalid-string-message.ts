import ValidatableInvalid from "@dikac/t-validatable/error/invalid";
import Validatable from "../validatable";
import Infer from "@dikac/t-message/message/infer";
import Message from "@dikac/t-message/message";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import StrictOmit from "@dikac/t-object/strict-omit";

const defaultError = (validatable, message) => new ValidatableInvalid(validatable, message);

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
// export default function InvalidStringMessage<ValidatableType extends Validatable>(
//     validatable: ValidatableType,
//     message : (validatable: Infer<ValidatableType>) => string = JSON.stringify,
//     error : (validatable: ValidatableType, message : string) => Error = defaultError
// ) {
//
//     return error(validatable, message(validatable.message as Infer<ValidatableType>))
// }
export type Argument<ValidatableType extends Validatable, Error extends globalThis.Error> =
    ValidatableContainer<ValidatableType> &
    Message<(validatable: Infer<ValidatableType>) => string> &
    {error: (validatable: ValidatableType, message : string) => Error}

export default function InvalidStringMessage<ValidatableType extends Validatable>({
        validatable
  } : Pick<Argument<ValidatableType, globalThis.Error>, 'validatable'>
) : globalThis.Error;

export default function InvalidStringMessage<ValidatableType extends Validatable>({
        validatable,
        message,
  } : StrictOmit<Argument<ValidatableType, globalThis.Error>, 'error'>
) : globalThis.Error;

export default function InvalidStringMessage<ValidatableType extends Validatable, Error extends globalThis.Error>({
        validatable,
        message,
        error,
  } : Argument<ValidatableType, Error>
) : Error;

export default function InvalidStringMessage<ValidatableType extends Validatable, Error extends globalThis.Error>({
      validatable,
      message = JSON.stringify,
      error = defaultError,
  } : Argument<ValidatableType, Error|globalThis.Error>
) : Error|globalThis.Error {

    return error(validatable, message(validatable.message as Infer<ValidatableType>))
}
