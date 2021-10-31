import ValidatableType from "./dynamic";
import StaticValue from "../value/static";
declare type Static<Allow = unknown, Argument extends Allow = Allow, Expectation extends Allow = Allow, Allowed extends boolean = boolean, Expected extends boolean = boolean, Validatable extends ValidatableType<Allow> = ValidatableType<Allow>> = StaticValue<Allow, Argument, Expectation, Allowed, Expected, Validatable>;
export default Static;
