import Validatable from "../validatable";
import Infer from "@dikac/t-message/message/infer";
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
export default function InvalidStringMessageParameters<ValidatableType extends Validatable>(validatable: ValidatableType, message?: (validatable: Infer<ValidatableType>) => string): globalThis.Error;
export default function InvalidStringMessageParameters<ValidatableType extends Validatable, Error extends globalThis.Error>(validatable: ValidatableType, message?: (validatable: Infer<ValidatableType>) => string, error?: (validatable: ValidatableType, message: string) => Error): Error;
