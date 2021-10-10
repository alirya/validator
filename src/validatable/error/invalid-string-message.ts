import ValidatableInvalid from "@dikac/t-validatable/error/invalid";
import Validatable from "../validatable";
import Infer from "@dikac/t-message/message/infer";

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
export default function InvalidStringMessage<ValidatableType extends Validatable>(
    validatable: ValidatableType,
    message : (validatable: Infer<ValidatableType>) => string = JSON.stringify,
    error : (validatable: ValidatableType, message : string) => Error = defaultError
) {

    return error(validatable, message(validatable.message as Infer<ValidatableType>))
}
