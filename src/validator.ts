import Static from './validatable/static';
import ValidatableType from './validatable/validatable';
import Replace from './validatable/replace';
/**
 * {@template Allow} type which can be handled by implementation
 *
 * {@template Expectation} desired value type
 *
 * {@template Allowed} result to be used for matching {@template Allow} or
 * for {@template AllowArgument} if extends {@template Allow}
 *
 * {@template Expected} result to be used for matching {@template Expectation} or
 * for {@template ExpectedArgument} if extends {@template Expectation}
 *
 * {@template ValidatableType} return value for {@see Validator} callback
 */

export default interface Validator<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Validatable extends ValidatableType = ValidatableType
> {
    <Argument extends Expectation>(value: Argument): Replace<Argument, Expected, Validatable>;
    <Argument extends Allow>(value: Argument): Static<Argument, Expectation, Allowed, Expected, Validatable>;
}

