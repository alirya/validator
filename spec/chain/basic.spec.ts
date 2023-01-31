import Chain from '../../dist/chain';
import TestString from '../test-string';
import TestSpecificString from '../test-specific-string';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


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