import CallbackClassParameters from "./callback-class-parameters";
export default function CallbackFunctionParameters(value, validation, 
// message : (value:Allow, valid: Allowed|Expected, ...extra: Arguments)=> Message,
message, argument = []) {
    // return {
    //     value,
    //     message : message(value, true, ...argument ),
    //     valid : true
    // } as Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, Message>>
    return new CallbackClassParameters(value, validation, message, argument);
}
//# sourceMappingURL=callback-function-parameters.js.map