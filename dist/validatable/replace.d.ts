import Validatable from "./validatable";
import ReplaceValue from "../value/replace";
declare type Replace<ValueType, Boolean extends boolean, ValidatableType extends Validatable> = ReplaceValue<ValueType, Boolean, ValidatableType>;
export default Replace;
