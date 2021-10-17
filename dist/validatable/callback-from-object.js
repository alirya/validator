import CallbackClass from "./callback-class";
export default function CallbackFromObject(object) {
    return new CallbackClass(object.value, object.validation, object.message);
}
//# sourceMappingURL=callback-from-object.js.map