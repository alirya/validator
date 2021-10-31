import Dynamic from "../dynamic";
import InvalidStringMessage from "../error/invalid-string-message";

/**
 * Throw exception if given value is not {@link InvalidStringMessage} type
 */

export default function Valid<
    Argument extends Dynamic = Dynamic,
>(
    value : Argument,
    error : (validatable:Argument)=>Error = InvalidStringMessage.Parameter
) : asserts value is Argument {

    if(!value.valid) {

       throw error(value);
    }
}
