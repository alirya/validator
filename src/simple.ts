import ValidatableType from "./validatable/dynamic";
import Validator from "./validator";

/**
 * simple implementation of {@see Validator}
 */

type Simple<
    Allow = unknown,
    Expectation extends Allow = Allow,
    Validatable extends ValidatableType<Allow> = ValidatableType<Allow>
> = Validator<Allow, Expectation, false, true, Validatable>;

export default Simple;

