import Chain from '../../dist/chain.js';
import TestString from '../test-string.js';
import TestSpecificString from '../test-specific-string.js';
import ReturnSimple from '../../dist/validatable/simple.js';
import ValidatorSimple from '../../dist/simple.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

function Object(value) : ReturnSimple<unknown, string, string> {

    return <ReturnSimple<unknown, string, string>> {
        valid : typeof value === 'string',
        value : value,
        message : 'message'
    };
}


const validator = Chain(TestString(), TestSpecificString('str'));

it('valid', function () {

    const validatable = validator('str');

    expect(validatable.message).toBe('message');
    expect(validatable.valid).toBeTrue();
    expect(validatable.value).toBe('str');
});

it('invalid', function () {

    const validatable = validator('str1');

    expect(validatable.message).toBe('message');
    expect(validatable.valid).toBeFalse();
    expect(validatable.value).toBe('str1');
});