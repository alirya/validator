import CallbackClassParameters from "./callback-class-parameters";
/**
 * parameter argument implementation for function
 */
export default function CallbackFunctionParameters(value, validation, message, argument = []) {
    return new CallbackClassParameters(value, validation, message, argument);
}
//# sourceMappingURL=callback-function-parameters.js.map