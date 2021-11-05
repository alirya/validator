import CallbackClassParameter from "./callback-class-parameter";
import CallbackClassParameters from "./callback-class-parameters";
import CallbackFunctionParameters from "./callback-function-parameters";
import CallbackFunctionParameter from "./callback-function-parameter";
/**
 * assemble {@see Dynamic} from value,
 * callback validation, and callback message
 *
 * this contain multiple class and function implementation
 *
 * function implementation version offer
 * more accurate type
 */
/**
 * class type
 */
/**
 * namespace aliases
 */
var Callback;
(function (Callback) {
    let Class;
    (function (Class) {
        Class.Parameter = CallbackClassParameter;
        Class.Parameters = CallbackClassParameters;
    })(Class = Callback.Class || (Callback.Class = {}));
    let Function;
    (function (Function) {
        Function.Parameter = CallbackFunctionParameter;
        Function.Parameters = CallbackFunctionParameters;
    })(Function = Callback.Function || (Callback.Function = {}));
})(Callback || (Callback = {}));
export default Callback;
//# sourceMappingURL=callback.js.map