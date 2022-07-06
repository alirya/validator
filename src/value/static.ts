import ReplaceValue from '@alirya/value/value/replace.js';
import Dynamic from './validatable.js';
import ReplaceValidatable from '@alirya/validatable/boolean/replace.js';

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
