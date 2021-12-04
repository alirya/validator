import Validatable from "./validatable";
import ReplaceValue from "../value/replace";

type Replace<
    ValueType,
    Boolean extends boolean,
    ValidatableType extends Validatable<ValueType>
> = ReplaceValue<ValueType, Boolean, ValidatableType>;

export default Replace;
