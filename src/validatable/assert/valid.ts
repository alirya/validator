import Validatable from '../validatable.js';
import InvalidStringMessage from '../error/invalid-string-message.js';

/**
 * Throw exception if given value is not {@link InvalidStringMessage} type
 */

export default function Valid<
    Argument extends Validatable = Validatable,
>(
    value : Argument,
    error : (validatable:Argument)=>Error = InvalidStringMessage.Parameters
) : asserts value is Argument {

    if(!value.valid) {

       throw error(value);
    }
}
