import Callback from "../../dist/callback";
import String from "@dikac/t-string/boolean/string";
import MessageString from "@dikac/t-string/assert/string/string";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let callback = Callback<unknown, string, string>(
    String,
    (result) : string => MessageString(result.valid, result.value)
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


