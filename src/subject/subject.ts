import Validator from '../validator.js';

type Expectation<Type> = Type extends Validator<infer Allow, infer Expectation> ? Allow|Expectation : never;

export default Expectation;
