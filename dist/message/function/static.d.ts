import StaticParameter from "./static-parameter";
import StaticParameters from "./static-parameters";
import StaticReturn from "../../value/static";
import Dynamic from "../../value/dynamic";
export declare namespace Static {
    type Parameter<Allow = unknown, Expectation extends Allow = Allow, Allowed extends boolean = boolean, Expected extends boolean = boolean, MessageType = unknown, Validatable extends StaticReturn<Allow, Expectation, Allowed, Expected, Readonly<Dynamic<Allow>>> = StaticReturn<Allow, Expectation, Allowed, Expected, Readonly<Dynamic<Allow>>>> = StaticParameter<Allow, Expectation, Allowed, Expected, MessageType, Validatable>;
    type Parameters<Allow = unknown, Expectation extends Allow = Allow, Allowed extends boolean = boolean, Expected extends boolean = boolean, MessageType = unknown, ExtraArgument extends unknown[] = unknown[]> = StaticParameters<Allow, Expectation, Allowed, Expected, MessageType, ExtraArgument>;
}
export default Static;
