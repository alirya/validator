import ValidatableType from "./validatable";
import SimpleValue from "../value/simple";

type Simple<
    Allow = unknown,
    Expectation = unknown,
    Validatable extends ValidatableType = ValidatableType
> = SimpleValue<Allow, Expectation, Validatable>;

export default Simple;
