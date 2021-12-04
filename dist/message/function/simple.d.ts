import SimpleParameter from "./simple-parameter";
import SimpleParameters from "./simple-parameters";
import SimpleReturn from "../../value/simple";
import Dynamic from "../../value/validatable";
export declare namespace Simple {
    type Parameters<Allow = unknown, Expectation extends Allow = Allow, MessageType = unknown, ExtraArgument extends unknown[] = unknown[]> = SimpleParameters<Allow, Expectation, MessageType, ExtraArgument>;
    type Parameter<Allow = unknown, Expectation extends Allow = Allow, MessageType = unknown, Validatable extends SimpleReturn<Allow, Expectation, Readonly<Dynamic<Allow>>> = SimpleReturn<Allow, Expectation, Readonly<Dynamic<Allow>>>> = SimpleParameter<Allow, Expectation, MessageType, Validatable>;
}
export default Simple;
