import CallbackClassParameter from "./callback-class-parameter";
export default function CallbackFunctionParameter(argument) {
    if (!argument.argument) {
        argument.argument = [];
    }
    return new CallbackClassParameter(argument);
}
//# sourceMappingURL=callback-function-parameter.js.map