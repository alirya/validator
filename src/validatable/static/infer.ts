import Simple from '../../simple';

/**
 * get {@Template Validatable} type value from {@see Simple}
 */
type Infer<Type> = Type extends Simple<any, infer As> ? As : never;

export default Infer;
