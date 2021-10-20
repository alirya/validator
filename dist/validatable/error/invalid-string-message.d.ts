import Validatable from "../validatable";
import Infer from "@dikac/t-message/message/infer";
import Message from "@dikac/t-message/message";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import StrictOmit from "@dikac/t-object/strict-omit";
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
export declare type Argument<ValidatableType extends Validatable, Error extends globalThis.Error> = ValidatableContainer<ValidatableType> & Message<(validatable: Infer<ValidatableType>) => string> & {
    error: (validatable: ValidatableType, message: string) => Error;
};
export default function InvalidStringMessage<ValidatableType extends Validatable>({ validatable }: Pick<Argument<ValidatableType, globalThis.Error>, 'validatable'>): globalThis.Error;
export default function InvalidStringMessage<ValidatableType extends Validatable>({ validatable, message, }: StrictOmit<Argument<ValidatableType, globalThis.Error>, 'error'>): globalThis.Error;
export default function InvalidStringMessage<ValidatableType extends Validatable, Error extends globalThis.Error>({ validatable, message, error, }: Argument<ValidatableType, Error>): Error;
