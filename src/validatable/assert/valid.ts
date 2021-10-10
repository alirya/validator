import Validatable from "../validatable";
import InvalidStringMessage from "../error/invalid-string-message";

/**
 * Throw exception if given value is not {@link InvalidStringMessage} type
 */

export default function Valid<
    Argument extends Validatable = Validatable,
>(
    value : Argument,
    error : (value:Argument)=>Error = InvalidStringMessage
) : asserts value is Argument {

    if(!value.valid) {

       throw error(value);
    }
}
