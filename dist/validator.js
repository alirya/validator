function TestString() {
    return function (value) {
        return {
            valid: typeof value === "string",
            value: value,
            message: 'message'
        };
    };
}
const test = TestString();
const result = test(1) /* as Static<number, string, false, true>*/;
if (result.valid) {
    const string = result.value;
    // @ts-expect-error
    const number = result.value;
}
else {
    // @ts-expect-error
    const string = result.value;
    const number = result.value;
}
import ValidatableEqual from "@dikac/t-boolean/validatable/equal-parameters";
import EqualMessage from "@dikac/t-boolean/assert/string/equal-parameters";
function EqualParameters(compare, message = EqualMessage) {
    return function (value) {
        return ValidatableEqual(value, compare, message);
    };
}
let validator = EqualParameters(1, EqualMessage);
let equal = validator(2);
if (equal.valid) {
    let specific = equal.value;
    let number = equal.value;
    let unknown = equal.value;
}
else {
    let specific = equal.value;
    let number = equal.value;
    let unknown = equal.value;
}
//# sourceMappingURL=validator.js.map