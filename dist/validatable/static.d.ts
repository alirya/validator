import ValidatableTypes from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
declare type Static<Allow = unknown, Argument extends Allow = Allow, Expectation extends Allow = Allow, Allowed extends boolean = boolean, Expected extends boolean = boolean, Validatable extends {} = {}> = ValidatableTypes<Allowed> & Value<Argument> & Omit<Validatable, 'value' | 'valid'> | ValidatableTypes<Expected> & Value<Expectation> & Omit<Validatable, 'value' | 'valid'>;
export default Static;
