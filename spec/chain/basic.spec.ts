import Chain from '../../dist/chain.js';
import TestString from '../test-string.js';
import TestSpecificString from '../test-specific-string.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


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