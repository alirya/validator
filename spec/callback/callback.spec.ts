import {CallbackParameters} from '../../dist/callback';
import String from '@alirya/string/boolean/string';
import MessageString from '@alirya/string/assert/string/string';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let callback = CallbackParameters<unknown, string, string>(
    String,
    (value, valid: boolean) : string => MessageString.Parameters(valid, value)
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


