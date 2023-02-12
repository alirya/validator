import Validator from '../validator.js';

type Allow<Type> = Type extends Validator<infer As> ? As : never;

export default Allow;
