import Chain from '../../dist/chain';
import TestString from '../test-string';
import TestSpecificString from '../test-specific-string';
import ReturnSimple from '../../dist/validatable/simple';
import ValidatorSimple from '../../dist/simple';

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

    let validatable = validator('str');

    expect(validatable.message).toBe('message');
    expect(validatable.valid).toBeTrue();
    expect(validatable.value).toBe('str');
});

it('invalid', function () {

    let validatable = validator('str1');

    expect(validatable.message).toBe('message');
    expect(validatable.valid).toBeFalse();
    expect(validatable.value).toBe('str1');
});