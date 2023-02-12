import Static from './static.js';

type Simple<
    Allow = unknown,
    Expectation = unknown,
    Message = unknown,
    Context extends object = {}
> = Static<
    Allow,
    Expectation,
    false,
    true,
    Message,
    Context
>;

export default Simple;