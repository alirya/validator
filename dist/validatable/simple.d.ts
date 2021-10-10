import Validatable from "./validatable";
import Unambiguous from "./unambiguous";
declare type Simple<Base = unknown, Argument extends Base = Base, Type extends Base = Base, ValidatableType extends Validatable<Base> = Validatable<Base>> = Unambiguous<Base, Argument, Type, false, true, ValidatableType>;
export default Simple;
