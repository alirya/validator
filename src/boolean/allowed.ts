import Validator from '../validator.js';

/**
 * get {@Template Allowed} {@see boolean} value of {@see Validator}
 */
type Allowed<Type> = Type extends Validator<any, any, infer As> ? As : never;

export default Allowed;
