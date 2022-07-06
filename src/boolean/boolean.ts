import Validator from '../validator.js';

type Boolean<Type> = Type extends Validator<any, any, infer Allowed, infer Expected> ? Allowed|Expected : never;

export default Boolean;
