import SimpleParameter from "./simple-parameter";
import SimpleParameters from "./simple-parameters";
export declare namespace Simple {
    type Parameters<Allow = unknown, Expectation extends Allow = Allow, MessageType = unknown> = SimpleParameters<Allow, Expectation, MessageType>;
    type Parameter<Allow = unknown, Expectation extends Allow = Allow, MessageType = unknown> = SimpleParameter<Allow, Expectation, MessageType>;
}
export default Simple;
