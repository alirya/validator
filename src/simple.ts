import ValidatableType from './validatable/validatable.js';
import Validator from './validator.js';

/**
 * simple implementation of {@see Validator}
 */

type Simple<
    Allow = unknown,
    Expectation = Allow,
    Validatable extends ValidatableType = ValidatableType
> = Validator<Allow, Expectation, false, true, Validatable>;

export default Simple;

