import SimpleReturn from "../../value/simple";
import Dynamic from "../../validatable/dynamic";
import ReplaceValue from "@dikac/t-value/value/replace";
export declare type SimpleParameter<Allow = unknown, Expectation extends Allow = Allow, MessageType = unknown, Validatable extends SimpleReturn<Allow, Allow, Expectation, Readonly<Dynamic<Allow, MessageType>>> = SimpleReturn<Allow, Allow, Expectation, Readonly<Dynamic<Allow, MessageType>>>> = <Value extends Allow>(argument: ReplaceValue<Validatable, Value>) => MessageType;
export default SimpleParameter;
