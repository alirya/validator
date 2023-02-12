import Static from './validatable/static.js';
import ValidatableType from './validatable/validatable.js';
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
    Expectation = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Message  = unknown,
    Context extends object = {}
> {
    <Argument extends Expectation>(value: Argument): ValidatableType<Argument, Message, Expected, Context>;
    <Argument extends Allow>(value: Argument): Static<Argument, Expectation, Allowed, Expected, Message, Context>;
}

