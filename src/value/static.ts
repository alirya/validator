import ReplaceValue from '@alirya/value/value/replace';
import Dynamic from './validatable';
import ReplaceValidatable from '@alirya/validatable/boolean/replace';

type Static<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Validatable extends Dynamic = Dynamic
> =
    ReplaceValue<ReplaceValidatable<Validatable, Expected>, Expectation> |
    ReplaceValue<ReplaceValidatable<Validatable, Allowed>, Allow>
;

export default Static;
