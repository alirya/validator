import SimpleParameter from "./simple-parameter";
import SimpleParameters from "./simple-parameters";
import SimpleReturn from "../../value/simple";
import Dynamic from "../../value/dynamic";
export declare namespace Simple {
    type Parameters<Allow = unknown, Argument extends Allow = Allow, Expectation extends Allow = Allow, MessageType = unknown, ExtraArgument extends unknown[] = unknown[]> = SimpleParameters<Allow, Argument, Expectation, MessageType, ExtraArgument>;
    type Parameter<Allow = unknown, Argument extends Allow = Allow, Expectation extends Allow = Allow, MessageType = unknown, Validatable extends SimpleReturn<Allow, Allow, Expectation, Readonly<Dynamic<Allow>>> = SimpleReturn<Allow, Allow, Expectation, Readonly<Dynamic<Allow>>>> = SimpleParameter<Allow, Argument, Expectation, MessageType, Validatable>;
}
export default Simple;
