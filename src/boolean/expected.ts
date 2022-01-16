import Validator from '../validator';
/**
 * get {@Template Expected} {@see boolean} value of {@see Validator}
 */
type Expected<Type> = Type extends Validator<any, any, any, infer As> ? As : never;

export default Expected;
