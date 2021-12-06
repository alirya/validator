import Dynamic from "./validatable";
import Static from "./static";

type Simple<
    Allow = unknown,
    Expectation = unknown,
    Validatable extends Dynamic = Dynamic
> = Static<
    Allow,
    Expectation,
    false,
    true,
    Validatable
>;

export default Simple;
