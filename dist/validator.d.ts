import Static from "./validatable/static";
import ValidatableType from "./validatable/dynamic";
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
declare type Validator<Allow = any, Expectation extends Allow = Allow, Allowed extends boolean = boolean, Expected extends boolean = boolean, Validatable extends ValidatableType<Allow> = ValidatableType<Allow>> = <AllowArgument extends Allow>(value: AllowArgument) => Static<Allow, AllowArgument, Expectation, Allowed, Expected, Validatable>;
export default Validator;
