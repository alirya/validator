import Validator  from "../dist/validator";
import ValidatorSimple  from "../dist/simple";
import Validatable from "../dist/validatable/validatable";
import ReturnSimple from "../dist/validatable/simple";

export default function TestString()  : ValidatorSimple<unknown, string, Validatable<unknown, string>> {

    return function<Argument>(value : Argument) {

        return <ReturnSimple<unknown, Argument, string, Validatable<unknown, string>>> {
            valid : typeof value === "string",
            value : value,
            message : 'message'
        }
    } as ValidatorSimple<unknown, string, Validatable<unknown, string>>
}

const test : Validator<unknown, string, false, true> = TestString();


const result = test(1);

if(result.valid) {

    const string : string = result.value;
    // @ts-expect-error
    const number : number = result.value;

} else {

    // @ts-expect-error
    const string : string = result.value;
    const number : number = result.value;
}
