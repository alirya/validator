import Static from "./validatable/static";
import ValidatableType from "./validatable/validatable";
import ReplaceValue from "@dikac/t-value/value/replace";
import ReplaceValidatable from "@dikac/t-validatable/boolean/replace";

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
    Allow = any,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Validatable extends ValidatableType<Allow> = ValidatableType<Allow>
    > {

    <Argument extends Allow>(value : Argument) : ReplaceValue<ReplaceValidatable<Validatable, Allowed>, Argument>;
    <Argument extends Expectation>(value : Argument) : ReplaceValue<ReplaceValidatable<Validatable, Expected>, Argument>;

    // <AllowArgument extends Allow, ExpectedArgument extends Expectation>(value : AllowArgument|ExpectedArgument) =>
    //     Static<Allow, AllowArgument, ExpectedArgument, Allowed, Expected, Validatable>

}
