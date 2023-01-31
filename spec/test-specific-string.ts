import ValidatorSimple  from '../dist/simple';
import Validatable from '../dist/validatable/validatable';
import ReturnSimple from '../dist/validatable/simple';

export default function TestSpecificString(string: string)  : ValidatorSimple<unknown, string, string> {

    return function(value) {

        return <ReturnSimple<unknown, string, string>> {
            valid : value === string,
            value : value,
            message : 'message'
        };
    }   as ValidatorSimple<unknown, string, string>;
}

const test  = TestSpecificString('a');


const result = test(1);

if(result.valid) {

    const string : string = result.value;
    // @ts-expect-error
    const number : number = result.value;
    const message : string = result.message;

} else {

    // @ts-expect-error
    const string : string = result.value;
    const number : number = result.value;
    const message : string = result.message;
}
