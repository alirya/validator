import ReplaceValue from "@dikac/t-value/value/replace";
import ValidatableType from "./validatable";
import ReplaceValidatable from "@dikac/t-validatable/boolean/replace";

type Unambiguous<
    Allow = unknown,
    Argument extends Allow = Allow,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Validatable extends ValidatableType<Allow> = ValidatableType<Allow>
> =
     ReplaceValue<ReplaceValidatable<Validatable, Allowed>, Argument> |
     ReplaceValue<ReplaceValidatable<Validatable, Expected>, Expectation>
;

export default Unambiguous;
