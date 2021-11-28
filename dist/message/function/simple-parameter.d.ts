import SimpleReturn from "../../value/simple";
import Dynamic from "../../value/dynamic";
import ReplaceValue from "@dikac/t-value/value/replace";
import ReplaceValidatable from "@dikac/t-validatable/boolean/replace";
export declare type SimpleParameter<Allow = unknown, Argument extends Allow = Allow, Expectation extends Allow = Allow, MessageType = unknown, Validatable extends SimpleReturn<Allow, Allow, Expectation, Readonly<Dynamic<Allow>>> = SimpleReturn<Allow, Allow, Expectation, Readonly<Dynamic<Allow>>>> = (<Value extends Argument>(argument: ReplaceValidatable<ReplaceValue<Validatable, Value>, false>) => MessageType) | (<Value extends Expectation>(argument: ReplaceValidatable<ReplaceValue<Validatable, Value>, true>) => MessageType);
export default SimpleParameter;
