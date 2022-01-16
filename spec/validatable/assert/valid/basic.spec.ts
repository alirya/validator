import Validatable from "@alirya/validatable/validatable";
import Value from "@alirya/value/value";
import Message from "@alirya/message/message";
import Valid from "../../../../dist/validatable/assert/valid";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatible', ()=>{

    let argument : Validatable & Value & Message = {
        value : 1,
        valid : true,
        message : 'one'
    };

    // @ts-expecerror
    let invalid : number = argument.value;

    // @ts-expecerror
    Valid<Validatable & Value<number> & Message>(argument, (val1)=>new Error('error'));

    let value : number = argument.value;
})

it("valid", function() {

    let argument : Validatable & Value & Message = {
        value : 1,
        valid : true,
        message : 'one'
    };


    Valid(argument, (val1)=>new Error('error'));

    expect(argument.valid).toBeTrue();
    expect(argument.value).toBe(1);

});

it("invalid", function() {

    let argument : Validatable & Value & Message = {
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
