import ValidatableType from "./validatable";
import Static from "./static";
import SimpleValue from "../value/simple";

type Simple<
    Allow = unknown,
    Argument extends Allow = Allow,
    Expectation extends Allow = Allow,
    Validatable extends ValidatableType<Allow> = ValidatableType<Allow>
> = SimpleValue<Allow, Argument, Expectation, Validatable>;

export default Simple;
