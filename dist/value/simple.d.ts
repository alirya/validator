import Dynamic from "./dynamic";
import Static from "./static";
declare type Simple<Allow = unknown, Expectation extends Allow = Allow, Validatable extends Dynamic<Allow> = Dynamic<Allow>> = Static<Allow, Expectation, false, true, Validatable>;
export default Simple;
