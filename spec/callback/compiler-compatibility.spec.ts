import Callback from '../../dist/callback';
import String from '@alirya/string/boolean/string';
import MessageString from '@alirya/string/assert/string/string';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let callback = Callback.Parameters<unknown, string, string>(
    String,
    (result) : string => MessageString.Parameters(result.valid, result.value)
);

it('compiler compatibility', ()=>{

    let validatable = callback(1);

    if(validatable.valid) {

        let boolean : boolean = validatable.valid;
        let value : string = validatable.value;
        let message : string = validatable.message;

    } else {

        let boolean : boolean = validatable.valid;
        // @ts-expect-error
        let value : string = validatable.value;
        let number : number = validatable.value;
        let message : string = validatable.message;
    }


    {
        // @ts-expect-error
        let valid : string = validatable.valid;
        let value : any = validatable.value;
        // @ts-expect-error
        let message : number = validatable.message;
    }
});

