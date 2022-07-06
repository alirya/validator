import ValidatableType from './validatable.js';
import SimpleValue from '../value/simple.js';

type Simple<
    Allow = unknown,
    Expectation = unknown,
    Validatable extends ValidatableType = ValidatableType
> = SimpleValue<Allow, Expectation, Validatable>;

export default Simple;
