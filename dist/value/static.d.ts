import ReplaceValue from "@dikac/t-value/value/replace";
import Dynamic from "./validatable";
import ReplaceValidatable from "@dikac/t-validatable/boolean/replace";
declare type Static<Allow = unknown, Expectation = unknown, Allowed extends boolean = boolean, Expected extends boolean = boolean, Validatable extends Dynamic = Dynamic> = ReplaceValue<ReplaceValidatable<Validatable, Expected>, Expectation> | ReplaceValue<ReplaceValidatable<Validatable, Allowed>, Allow>;
export default Static;
