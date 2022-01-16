import ReplaceValue from '@alirya/value/value/replace';
import ValidatableReplace from '@alirya/validatable/boolean/replace';
import Validatable from './validatable';

type Replace<
    ValueType,
    Boolean extends boolean,
    ValidatableType extends Validatable
> = ReplaceValue<ValidatableReplace<ValidatableType, Boolean>, ValueType>;

export default Replace;
