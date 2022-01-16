import Validator from '../validator';

type Expectation<Type> = Type extends Validator<infer Allow, infer Expectation> ? Allow|Expectation : never;

export default Expectation;
