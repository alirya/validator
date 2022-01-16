import Callback from "../../dist/callback-parameters";
import String from "@alirya/string/boolean/string";
import MessageString from "@alirya/string/assert/string/string-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let callback = Callback<unknown, string, string>(
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
        // @ts-expecerror
        let value : string = validatable.value;
        let number : number = validatable.value;
        let message : string = validatable.message;
    }


    {
        // @ts-expecerror
        let valid : string = validatable.valid;
        let value : any = validatable.value;
        // @ts-expecerror
        let message : number = validatable.message;
    }
});

