import ReplaceValue from "@dikac/t-value/value/replace";
import ValidatableReplace from "@dikac/t-validatable/boolean/replace";
import Dynamic from "./dynamic";
declare type Replace<ValueType, Boolean extends boolean, ValidatableType extends Dynamic> = ReplaceValue<ValidatableReplace<ValidatableType, Boolean>, ValueType>;
export default Replace;
