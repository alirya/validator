import SimpleParameter from "./simple-parameter";
import SimpleParameters from "./simple-parameters";
import SimpleReturn from "../../value/simple";
import Dynamic from "../../value/dynamic";

export namespace Simple {

    export type Parameters<
        Allow = unknown,
        Expectation extends Allow = Allow,
        MessageType = unknown,
        ExtraArgument extends unknown[] = unknown[]
    > = SimpleParameters<Allow, Expectation, MessageType, ExtraArgument>;

    export type Parameter<
        Allow = unknown,
        Expectation extends Allow = Allow,
        MessageType = unknown,
        Validatable extends SimpleReturn<Allow, Allow, Expectation, Readonly<Dynamic<Allow>>> =
            SimpleReturn<Allow, Allow, Expectation, Readonly<Dynamic<Allow>>>
    > = SimpleParameter<Allow, Expectation, MessageType, Validatable>;
}

export default Simple;
