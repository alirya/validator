import StaticParameter from "./static-parameter";
import StaticParameters from "./static-parameters";
import StaticReturn from "../../value/static";
import Dynamic from "../../value/dynamic";

export namespace Static {

    export type Parameter<
        Allow = unknown,
        Argument extends Allow = Allow,
        Expectation extends Allow = Allow,
        Allowed extends boolean = boolean,
        Expected extends boolean = boolean,
        MessageType = unknown,
        Validatable extends StaticReturn<Allow, Argument, Expectation, Allowed, Expected, Readonly<Dynamic<Allow>>> =
            StaticReturn<Allow, Argument, Expectation, Allowed, Expected, Readonly<Dynamic<Allow>>>
        > = StaticParameter<Allow, Argument, Expectation, Allowed, Expected, MessageType, Validatable>;

    export type Parameters<
        Allow = unknown,
        Argument extends Allow = Allow,
        Expectation extends Allow = Allow,
        Allowed extends boolean = boolean,
        Expected extends boolean = boolean,
        MessageType = unknown,
        ExtraArgument extends unknown[] = unknown[]
        > = StaticParameters<Allow, Argument, Expectation, Allowed, Expected, MessageType, ExtraArgument>;
}

export default Static;
