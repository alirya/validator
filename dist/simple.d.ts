import ValidatableType from "./validatable/validatable";
import Validator from "./validator";
/**
 * simple implementation of {@see Validator}
 */
declare type Simple<Allow = unknown, Expectation = unknown, Validatable extends ValidatableType = ValidatableType> = Validator<Allow, Expectation, false, true, Validatable>;
export default Simple;
