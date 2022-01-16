import Validator from '../validator';

type Allow<Type> = Type extends Validator<infer As> ? As : never;

export default Allow;
