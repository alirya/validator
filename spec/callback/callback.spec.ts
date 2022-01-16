import Callback from "../../dist/callback-parameters";
import String from "@alirya/string/boolean/string";
import MessageString from "@alirya/string/assert/string/string-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let callback = Callback<unknown, string, string>(
    String,
    (value, valid: boolean) : string => MessageString(valid, value)
);

it('valid', function () {

    let validatable = callback('str');
    expect(validatable.valid).toBeTrue();
    expect(validatable.value).toBe('str');
});

it('invalid', function () {

    let validatable = callback(1);
    expect(validatable.valid).toBeFalse();
    expect(validatable.value).toBe(1);
});


