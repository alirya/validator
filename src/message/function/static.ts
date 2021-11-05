import StaticParameter from "./static-parameter";
import StaticParameters from "./static-parameters";

export namespace Static {

    export type Parameter<
        Allow = unknown,
        Argument extends Allow = Allow,
        Expectation extends Allow = Allow,
        Allowed extends boolean = boolean,
        Expected extends boolean = boolean,
        MessageType = unknown
        > = StaticParameter<Allow, Argument, Expectation, Allowed, Expected, MessageType>;

    export type Parameters<
        Allow = unknown,
        Argument extends Allow = Allow,
        Expectation extends Allow = Allow,
        Allowed extends boolean = boolean,
        Expected extends boolean = boolean,
        MessageType = unknown
        > = StaticParameters<Allow, Argument, Expectation, Allowed, Expected, MessageType>;
}

export default Static;
