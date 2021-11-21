import ValidatableType from "./validatable";
import SimpleValue from "../value/simple";
declare type Simple<Allow = unknown, Argument extends Allow = Allow, Expectation extends Allow = Allow, Validatable extends ValidatableType<Allow> = ValidatableType<Allow>> = SimpleValue<Allow, Argument, Expectation, Validatable>;
export default Simple;
