import ReplaceValue from "@dikac/t-value/value/replace";
import ValidatableI from "./validatable";
import ReplaceValidatable from "@dikac/t-validatable/boolean/replace";

type Unambiguous<
    Base = unknown,
    Argument extends Base = Base,
    Type extends Base = Base,
    Ambiguous extends boolean = boolean,
    Match extends boolean = boolean,
    Validatable extends ValidatableI<Base> = ValidatableI<Base>
> =
     ReplaceValue<ReplaceValidatable<Validatable, Ambiguous>, Argument> |
     ReplaceValue<ReplaceValidatable<Validatable, Match>, Type>
;

export default Unambiguous;
