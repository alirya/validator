import SimpleReturn from "../../value/simple";
import Dynamic from "../../value/validatable";
import ReplaceValue from "@dikac/t-value/value/replace";
import ReplaceValidatable from "@dikac/t-validatable/boolean/replace";
export default interface SimpleParameter<Allow = unknown, Expectation extends Allow = Allow, MessageType = unknown, Validatable extends SimpleReturn<Allow, Expectation, Readonly<Dynamic<Allow>>> = SimpleReturn<Allow, Expectation, Readonly<Dynamic<Allow>>>> {
    <Value extends Allow>(argument: ReplaceValidatable<ReplaceValue<Validatable, Value>, false>): MessageType;
    <Value extends Expectation>(argument: ReplaceValidatable<ReplaceValue<Validatable, Value>, true>): MessageType;
}
