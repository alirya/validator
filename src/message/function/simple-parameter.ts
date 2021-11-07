import SimpleReturn from "../../value/simple";
import Dynamic from "../../value/dynamic";
import ReplaceValue from "@dikac/t-value/value/replace";

export type SimpleParameter<
    Allow = unknown,
    Expectation extends Allow = Allow,
    MessageType = unknown,
    Validatable extends  SimpleReturn<Allow, Allow, Expectation, Readonly<Dynamic<Allow>>> =
        SimpleReturn<Allow, Allow, Expectation, Readonly<Dynamic<Allow>>>
> =
    <Value extends Allow>(argument: ReplaceValue<Validatable, Value>) => MessageType;

export default SimpleParameter;
