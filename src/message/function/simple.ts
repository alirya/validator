import SimpleParameter from "./simple-parameter";
import SimpleParameters from "./simple-parameters";

export namespace Simple {

    export type Parameters<
        Allow = unknown,
        Expectation extends Allow = Allow,
        MessageType = unknown
    > = SimpleParameters<Allow, Expectation, MessageType>;

    export type Parameter<
        Allow = unknown,
        Expectation extends Allow = Allow,
        MessageType = unknown
    > = SimpleParameter<Allow, Expectation, MessageType>;
}

export default Simple;
