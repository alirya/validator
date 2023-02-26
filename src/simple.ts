import Validator from './validator.js';

/**
 * simple implementation of {@see Validator}
 */

type Simple<
    Allow = unknown,
    Expectation = Allow,
    Message  = unknown,
    Context extends object = {}
> = Validator<Allow, Expectation, false, true, Message, Context>;

export default Simple;

export {Simple as SimpleValidator}