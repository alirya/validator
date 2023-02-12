import Callback from '../../dist/callback.js';
import String from '@alirya/string/boolean/string.js';
import MessageString from '@alirya/string/assert/string/string.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const callback = Callback.Parameters<unknown, string, string>(
    String,
    (result) : string => MessageString.Parameters(result.valid, result.value)
);

it('compiler compatibility', ()=>{

    const validatable = callback(1);

    if(validatable.valid) {

        const boolean : boolean = validatable.valid;
        const value : string = validatable.value;
        const message : string = validatable.message;

    } else {

        const boolean : boolean = validatable.valid;
        // @ts-expect-error
        const value : string = validatable.value;
        const number : number = validatable.value;
        const message : string = validatable.message;
    }


    {
        // @ts-expect-error
        const valid : string = validatable.valid;
        const value : any = validatable.value;
        // @ts-expect-error
        const message : number = validatable.message;
    }
});

