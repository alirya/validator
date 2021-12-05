import StaticReturn from "../../value/static";
import Dynamic from "../../value/validatable";
import ReplaceValue from "@dikac/t-value/value/replace";
import ReplaceValidatable from "@dikac/t-validatable/boolean/replace";

export interface StaticParameter<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
    Validatable extends StaticReturn<Allow, Expectation, Allowed, Expected, Readonly<Dynamic<Allow>>> =
        StaticReturn<Allow, Expectation, Allowed, Expected, Readonly<Dynamic<Allow>>>
> {
    <Value extends Allow>(argument: ReplaceValidatable<ReplaceValue<Validatable, Value>, Allowed>) : MessageType;
    <Value extends Expectation>(argument: ReplaceValidatable<ReplaceValue<Validatable, Value>, Expected>) : MessageType;
}


export default StaticParameter;
