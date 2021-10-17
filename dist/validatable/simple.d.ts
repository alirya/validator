import ValidatableType from "./validatable";
import Unambiguous from "./unambiguous";
declare type Simple<Allow = unknown, Argument extends Allow = Allow, Expectation extends Allow = Allow, Validatable extends ValidatableType<Allow> = ValidatableType<Allow>> = Unambiguous<Allow, Argument, Expectation, false, true, Validatable>;
export default Simple;
