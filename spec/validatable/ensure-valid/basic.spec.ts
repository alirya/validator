import Validatable from '@alirya/validatable/validatable';
import Value from '@alirya/value/value';
import Message from '@alirya/message/message';
import Valid from '../../../dist/validatable/ensure-valid';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('compiler compatible', ()=>{

    let argument : Validatable & Value & Message = {
        value : 1,
        valid : true,
        message : 'one'
    };

    // @ts-expect-error
    let invalid : number = argument.value;


    const validatable = Valid.Parameters<Validatable & Value<number> & Message>(
        // @ts-expect-error
        argument,
        (val1)=>new Error('error')
    );

    let value : number = validatable.value;
});

it('valid', function() {

    let argument : Validatable & Value & Message = {
        value : 1,
        valid : true,
        message : 'one'
    };


    const validatable = Valid.Parameters(argument, (val1)=>new Error('error'));

    expect(validatable.valid).toBeTrue();
    expect(validatable.value).toBe(1);

});

it('invalid', function() {

    let argument : Validatable & Value & Message = {
        value : 1,
        valid : false,
        message : 'one'
    };

    try {
        Valid.Parameters(argument, (val1)=>new Error('error'));
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e.message).toBe('error');
    }
});
