import SimpleReturn from "../../validatable/simple";
import Dynamic from "../../validatable/dynamic";

export type SimpleParameter<
    Allow = unknown,
    Expectation extends Allow = Allow,
    MessageType = unknown,
> =
    <Value extends Allow>(argument: Omit<SimpleReturn<Allow, Value, Expectation, Readonly<Dynamic<Allow, MessageType>>>, 'message'>) => MessageType;

export default SimpleParameter;
