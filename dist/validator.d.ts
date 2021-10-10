import Unambiguous from "./validatable/unambiguous";
import Validatable from "./validatable/validatable";
/**
 * {@template Base} type which can be handled by implementation
 * {@template Type} valid value type
 *
 * {@template Ambiguous} result to be used for {@template Base} or if {@template Argument} extends {@template Base}
 * {@template Match} result to be used for {@template Match} or if {@template Argument} extends {@template Match}
 * {@template ValidatableType} return value for {@see Validator.validate}
 */
declare type Validator<Base = any, Type extends Base = Base, Ambiguous extends boolean = boolean, Match extends boolean = boolean, ValidatableType extends Validatable<Base> = Validatable<Base>> = <Argument extends Base, TypeArgument extends Type>(value: Argument | TypeArgument) => Unambiguous<Base, Argument, TypeArgument, Ambiguous, Match, ValidatableType>;
export default Validator;
