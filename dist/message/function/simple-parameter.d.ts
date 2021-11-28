import SimpleReturn from "../../value/simple";
import Dynamic from "../../value/dynamic";
import ReplaceValue from "@dikac/t-value/value/replace";
export declare type SimpleParameter<Allow = unknown, Argument extends Allow = Allow, Expectation extends Allow = Allow, MessageType = unknown, Validatable extends SimpleReturn<Allow, Allow, Expectation, Readonly<Dynamic<Allow>>> = SimpleReturn<Allow, Allow, Expectation, Readonly<Dynamic<Allow>>>> = (<Value extends Argument>(argument: ReplaceValue<Validatable, Value>) => MessageType) | (<Value extends Expectation>(argument: ReplaceValue<Validatable, Value>) => MessageType);
export default SimpleParameter;
