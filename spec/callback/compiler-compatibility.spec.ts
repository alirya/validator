import Callback from "../../dist/callback";
import String from "@dikac/t-string/boolean/string";
import MessageString from "@dikac/t-string/assert/string/string-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let callback = Callback.Parameter<unknown, string, string, string>(
    String,
    (result) : string => MessageString(result.valid, result.value)
);

describe('compiler compatibility', ()=>{

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

