import Dynamic from './validatable.js';
import Static from './static.js';

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
