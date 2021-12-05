import CallbackParameters from "./callback-parameters";
export default function CallbackParameter({ validation, message, }) {
    return CallbackParameters(validation, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=callback-parameter.js.map