import Dynamic from "./validatable";
import Static from "./static";
declare type Simple<Allow = unknown, Expectation = unknown, Validatable extends Dynamic<Allow | Expectation> = Dynamic<Allow | Expectation>> = Static<Allow, Expectation, false, true, Validatable>;
export default Simple;
