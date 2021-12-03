import ValidatableType from "./validatable";
import SimpleValue from "../value/simple";

type Simple<
    Allow = unknown,
    Expectation extends Allow = Allow,
    Validatable extends ValidatableType<Allow> = ValidatableType<Allow>
> = SimpleValue<Allow, Expectation, Validatable>;

export default Simple;
