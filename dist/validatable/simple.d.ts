import ValidatableType from "./dynamic";
import Static from "./static";
declare type Simple<Allow = unknown, Argument extends Allow = Allow, Expectation extends Allow = Allow, Validatable extends ValidatableType<Allow> = ValidatableType<Allow>> = Static<Allow, Argument, Expectation, false, true, Validatable>;
export default Simple;
