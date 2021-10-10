import Validator  from "../dist/validator";
import ValidatorSimple  from "../dist/simple";
import Validatable from "../dist/validatable/validatable";
import ReturnSimple from "../dist/validatable/simple";

export default function TestObject()  : ValidatorSimple<unknown, object, Validatable<unknown, string>> {

    return function<Argument>(value : Argument) {

        return <ReturnSimple<unknown, Argument, object, Validatable<unknown, string>>> {
            valid : typeof value === "object",
            value : value,
            message : 'message'
        }

    } as ValidatorSimple<unknown, object, Validatable<unknown, string>>
}

const test : Validator<unknown, object, false, true> = TestObject();


const result = test(1);

if(result.valid) {

    const object : object = result.value;
    // @ts-expect-error
    const number : number = result.value;

} else {

    // @ts-expect-error
    const object : object = result.value;
    const number : number = result.value;
}
