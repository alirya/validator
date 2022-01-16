import Validator  from "../dist/validator";
import ValidatorSimple  from "../dist/simple";
import Validatable from "../dist/validatable/validatable";
import ReturnSimple from "../dist/validatable/simple";

export default function TestString()  : ValidatorSimple<unknown, string, Validatable<unknown, string>> {

    return function(value) {

        return <ReturnSimple<unknown, string, Validatable<unknown, string>>> {
            valid : typeof value === "string",
            value : value,
            message : 'message'
        }
    }   as ValidatorSimple<unknown, string, Validatable<unknown, string>>
}

const test  = TestString();


const result = test(1);

if(result.valid) {

    const string : string = result.value;
    // @ts-expecerror
    const number : number = result.value;
    const message : string = result.message;

} else {

    // @ts-expecerror
    const string : string = result.value;
    const number : number = result.value;
    const message : string = result.message;
}
