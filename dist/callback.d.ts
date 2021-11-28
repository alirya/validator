import CallbackParameter, { CallbackParameterArgument } from "./callback-parameter";
import CallbackParameters from "./callback-parameters";
/**
 * create {@see Validator} from multiple callback
 */
declare namespace Callback {
    const Parameter: typeof CallbackParameter;
    const Parameters: typeof CallbackParameters;
    type Argument<Base = unknown, Type extends Base = Base, MessageType = unknown> = CallbackParameterArgument<Base, Type, MessageType>;
}
export default Callback;
