import ValidatableType from "./validatable/validatable";
import Validator from "./validator";

/**
 * simple implementation of {@see Validator}
 */

type Simple<
    Allow = unknown,
    Expectation = unknown,
    Validatable extends ValidatableType<Allow|Expectation> = ValidatableType<Allow|Expectation>
> = Validator<Allow, Expectation, false, true, Validatable>;

export default Simple;

