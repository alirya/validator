import ValidatorSimple  from '../dist/simple.js';
import Validatable from '../dist/validatable/validatable.js';
import ReturnSimple from '../dist/validatable/simple.js';

export default function TestObject()  : ValidatorSimple<unknown, object, string> {

    return function(value) {

        return <ReturnSimple<unknown, object, string>> {
            valid : typeof value === 'object',
            value : value,
            message : 'message'
        };

    } as ValidatorSimple<unknown, object, string>;
}

const test  = TestObject();


const result = test(1);

if(result.valid) {

    const object : object = result.value;
    // @ts-expect-error
    const number : number = result.value;
    const message : string = result.message;

} else {

    // @ts-expect-error
    const object : object = result.value;
    const number : number = result.value;
    const message : string = result.message;
}
