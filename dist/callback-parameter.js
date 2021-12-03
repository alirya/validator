import CallbackParameters from "./callback-parameters";
export default function CallbackParameter(
// validation : <Argument extends Allow>(argument:Allow) => boolean,
// message : StaticMessage<Allow, Expectation, Allowed, Expected, Infer<Validatable>>,
{ validation, message, }) {
    return CallbackParameters(validation, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=callback-parameter.js.map