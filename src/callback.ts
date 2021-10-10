import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Validatable from "./validatable/validatable";
import ValidationCallback from "./validatable/callback-function";

/**
 * create {@see Validator} from multiple callback
 */
export default function Callback<
    Base = unknown,
    Type extends Base = Base,
    MessageType = unknown,
>(
    validation : <Argument extends Base>(argument:Base) => argument is Type,
    message : <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageType>>>, 'message'>) => MessageType,
) : Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>;
export default function Callback<
    Base = unknown,
    Type extends Base = Base,
    MessageType = unknown,
>(
    validation : <Argument extends Base>(argument:Base) => boolean,
    message : <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageType>>>, 'message'>) => MessageType,
) : Simple<Base, Type, Readonly<Validatable<Base, MessageType>>> {

    return function <Argument extends Base>(value) {

        return ValidationCallback(value, validation, message);

    } as Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>
}


