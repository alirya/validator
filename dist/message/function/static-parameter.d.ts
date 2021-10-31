import StaticReturn from "../../value/static";
import Dynamic from "../../validatable/dynamic";
import ReplaceValue from "@dikac/t-value/value/replace";
export declare type StaticParameter<Allow = unknown, Argument extends Allow = Allow, Expectation extends Allow = Allow, Allowed extends boolean = boolean, Expected extends boolean = boolean, MessageType = unknown, Validatable extends StaticReturn<Allow, Argument, Expectation, Allowed, Expected, Readonly<Dynamic<Allow, MessageType>>> = StaticReturn<Allow, Argument, Expectation, Allowed, Expected, Readonly<Dynamic<Allow, MessageType>>>> = <Value extends Argument>(argument: ReplaceValue<Validatable, Value>) => MessageType;
export default StaticParameter;
