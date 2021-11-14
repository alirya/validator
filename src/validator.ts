import Static from "./validatable/static";
import ValidatableType from "./validatable/dynamic";
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
// |
//ReplaceValue<ReplaceValidatable<Validatable, Expected>, Expectation>
type Validator<
    Allow = any,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Validatable extends ValidatableType<Allow> = ValidatableType<Allow>
    > = <AllowArgument extends Allow>(value : AllowArgument) =>
    Static<Allow, AllowArgument, Expectation, Allowed, Expected, Validatable>


export default Validator;
//
// type Validator<
//     Allow = any,
//     Expectation extends Allow = Allow,
//     Allowed extends boolean = boolean,
//     Expected extends boolean = boolean,
//     Validatable extends ValidatableType<Allow> = ValidatableType<Allow>
//     > =
//     <AllowArgument extends Allow, ExpectedArgument extends Expectation>(value : AllowArgument|ExpectedArgument) =>
//         Static<Allow, AllowArgument, ExpectedArgument, Allowed, Expected, Validatable>
//
// export default Validator;
