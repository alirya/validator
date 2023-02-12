import Validatable from '@alirya/validatable/validatable.js';
import Value from '@alirya/value/value.js';
import Message from '@alirya/message/message.js';
import Valid from '../../../../dist/validatable/assert/valid.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('compiler compatible', ()=>{

    const argument : Validatable & Value & Message = {
        value : 1,
        valid : true,
        message : 'one'
    };

    // @ts-expect-error
    const invalid : number = argument.value;

    // @ts-expect-error
    Valid<Validatable & Value<number> & Message>(argument, (val1)=>new Error('error'));

    const value : number = argument.value;
});

it('valid', function() {

    const argument : Validatable & Value & Message = {
        value : 1,
        valid : true,
        message : 'one'
    };


    Valid(argument, (val1)=>new Error('error'));

    expect(argument.valid).toBeTrue();
    expect(argument.value).toBe(1);

});

it('invalid', function() {

    const argument : Validatable & Value & Message = {
        value : 1,
        valid : false,
        message : 'one'
    };

    try {
        Valid(argument, (val1)=>new Error('error'));
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e.message).toBe('error');
    }
});
