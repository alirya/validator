import Dynamic from "../dynamic";
import InvalidStringMessageParameter, {InvalidStringMessageParameterArgument} from "./invalid-string-message-parameter";
import InvalidStringMessageParameters from "./invalid-string-message-parameters";

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

namespace InvalidStringMessage {

    export const Parameter = InvalidStringMessageParameter;
    export const Parameters = InvalidStringMessageParameters;
    export type Argument<ValidatableType extends Dynamic, Error extends globalThis.Error> =
        InvalidStringMessageParameterArgument<ValidatableType , Error>;
}

export default InvalidStringMessage;
