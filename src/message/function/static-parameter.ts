import StaticReturn from "../../value/static";
import Dynamic from "../../value/dynamic";
import ReplaceValue from "@dikac/t-value/value/replace";

export type StaticParameter<
    Allow = unknown,
    Argument extends Allow = Allow,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
    Validatable extends StaticReturn<Allow, Argument, Expectation, Allowed, Expected, Readonly<Dynamic<Allow>>> =
        StaticReturn<Allow, Argument, Expectation, Allowed, Expected, Readonly<Dynamic<Allow>>>
> =
    <Value extends Argument>(argument: ReplaceValue<Validatable, Value>) => MessageType;

export default StaticParameter;
