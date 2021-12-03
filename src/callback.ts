import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Validatable from "./validatable/validatable";
import ValidationCallback from "./validatable/callback";
import Validation from "@dikac/t-boolean/validation/validation";
import BaseMessage from "@dikac/t-message/message";
import Guard from "@dikac/t-boolean/validation/guard";
import Message from "./message/function/simple";
import CallbackParameter from "./callback-parameter";
import CallbackParameters from "./callback-parameters";

/**
 * create {@see Validator} from multiple callback
 */


namespace Callback {

    export const Parameter = CallbackParameter;
    export const Parameters = CallbackParameters;

}

export default Callback;
