import StaticReturn from "../../validatable/static";
import Dynamic from "../../validatable/dynamic";

export type StaticParameter<
    Allow = unknown,
    Argument extends Allow = Allow,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
    ExtraType = {}
> =
    <Value extends Argument>(argument: Omit<StaticReturn<Allow, Value, Expectation, Allowed, Expected, Readonly<Dynamic<Allow, MessageType>>>, 'message'> & ExtraType) => MessageType;

export default StaticParameter;
