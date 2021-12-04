import ValidatableType from "./validatable";
import StaticValue from "../value/static";
declare type Static<Allow = unknown, Expectation = unknown, Allowed extends boolean = boolean, Expected extends boolean = boolean, Validatable extends ValidatableType<Allow | Expectation> = ValidatableType<Allow | Expectation>> = StaticValue<Allow, Expectation, Allowed, Expected, Validatable>;
export default Static;
