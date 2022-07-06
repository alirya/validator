import ValidatableType from './validatable.js';
import StaticValue from '../value/static.js';

type Static<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Validatable extends ValidatableType = ValidatableType
> = StaticValue<Allow, Expectation, Allowed, Expected, Validatable>
;

export default Static;
