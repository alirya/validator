import Validator from "../validator";

/**
 * get {@Template Allowed} {@see boolean} value of {@see Validator}
 */
type Infer<Type> = Type extends Validator<any, any, infer As> ? As : never;

export default Infer;
