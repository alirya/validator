import ReplaceValue from '@alirya/value/value/replace.js';
import ValidatableReplace from '@alirya/validatable/boolean/replace.js';
import Validatable from './validatable.js';

type Replace<
    ValueType,
    Boolean extends boolean,
    ValidatableType extends Validatable
> = ReplaceValue<ValidatableReplace<ValidatableType, Boolean>, ValueType>;

export default Replace;
