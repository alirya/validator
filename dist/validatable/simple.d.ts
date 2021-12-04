import ValidatableType from "./validatable";
import SimpleValue from "../value/simple";
declare type Simple<Allow = unknown, Expectation = unknown, Validatable extends ValidatableType<Allow | Expectation> = ValidatableType<Allow | Expectation>> = SimpleValue<Allow, Expectation, Validatable>;
export default Simple;
