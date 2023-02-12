import Validator from '../validator.js';
import Static from './static.js';

type InferStatic<ValidatorType> = ValidatorType extends Validator<
    infer Allow,
    infer Expectation,
    infer Allowed,
    infer Expected,
    infer Message,
    infer Context
> ? Static<Allow, Expectation, Allowed, Expected, Message, Context> : never;

export default InferStatic;
