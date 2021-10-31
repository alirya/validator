import Dynamic from "./dynamic";
import Static from "./static";
declare type Simple<Allow = unknown, Argument extends Allow = Allow, Expectation extends Allow = Allow, Validatable extends Dynamic<Allow> = Dynamic<Allow>> = Static<Allow, Argument, Expectation, false, true, Validatable>;
export default Simple;
