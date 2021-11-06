import ReplaceValue from "@dikac/t-value/value/replace";
import ValidatableTypes from "@dikac/t-validatable/validatable";
import ValidatableType from "./dynamic";
import ReplaceValidatable from "@dikac/t-validatable/boolean/replace";
import Value from "@dikac/t-value/value";

type Static<
    Allow = unknown,
    Argument extends Allow = Allow,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Validatable extends {} = {}
> =

    ValidatableTypes<Allowed> & Value<Argument> & Omit<Validatable, 'value'|'valid'> |
    ValidatableTypes<Expected> & Value<Expectation> & Omit<Validatable, 'value'|'valid'>
   // ReplaceValue<ReplaceValidatable<Validatable, Allowed>, Argument> |
   // ReplaceValue<ReplaceValidatable<Validatable, Expected>, Expectation>
;

export default Static;
