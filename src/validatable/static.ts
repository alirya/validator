import ValidatableType from "./validatable";
import StaticValue from "../value/static";

type Static<
    Allow = unknown,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Validatable extends ValidatableType<Allow> = ValidatableType<Allow>
> = StaticValue<Allow, Expectation, Allowed, Expected, Validatable>
;

export default Static;
