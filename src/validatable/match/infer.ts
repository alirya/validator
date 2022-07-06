import Simple from '../../simple.js';

type Infer<Type> = Type extends Simple<any, infer As> ? As : never;

export default Infer;
