import Validator from '../validator.js';
import Static from './static.js';

type InferStatic<ValidatorType> = ValidatorType extends Validator<
    infer Allow,
    infer Expectation,
    infer Allowed,
    infer Expected,
    infer Validatable
> ? Static<Allow, Expectation, Allowed, Expected, Validatable> : never;

export default InferStatic;
