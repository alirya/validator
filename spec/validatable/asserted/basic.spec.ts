import IsObject from '@alirya/object/boolean/object';
import Asserted from '../../../dist/validatable/asserted';
import CallbackFunction from '../../../dist/validatable/callback-function-parameters';
import Validatable from '@alirya/validatable/validatable';
import Value from '@alirya/value/value';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

function TestMessage (value, valid) {
    return 'type:' + typeof value + ', valid:' + (valid ? 'true' : 'false');
}

describe('invalid', function () {

    let subject = CallbackFunction(1, IsObject, TestMessage, []);
    let callback = new Asserted(subject);

    it('check value', () => {
        try {
            let data = callback.value;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });

    it('check message', () => {

        expect(callback.message).toBe('type:number, valid:false');
    });

});


describe('valid', function () {

    let subject = CallbackFunction({}, IsObject, TestMessage, []);
    let callback = new Asserted(subject);

    it('check value', () => {
        expect(callback.valid).toBeTrue();
        expect(callback.value).toEqual({});
        expect(callback.message).toBe('type:object, valid:true');
    });
});


