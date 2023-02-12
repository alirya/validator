import Static from './static.js';

type Simple<
    Allow = unknown,
    Expectation = unknown,
    Context extends object = {}
> = Static<
    Allow,
    Expectation,
    false,
    true
> & Context;

export default Simple;
