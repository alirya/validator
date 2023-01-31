import Validator from './validator';
import Allow from './subject/allow';
import Expectation from './subject/expectation';
import Allowed from './boolean/allowed';
import Expected from './boolean/expected';
import Message from './message/message';
import InferValidator from './context/infer-validator';

export default function Chain<
    First extends Validator,
    Next extends Validator<Allow<First>, Expectation<First>>
>(
    first: First,
    next: Next
) : Validator<
    Allow<First>,
    Expectation<Next>,
    Allowed<First> & Allowed<Next>,
    Expected<Next> & Expected<First>,
    Message<First>|Message<Next>,
    InferValidator<First>|InferValidator<Next>
> {

    return function (value) {

        const validatable = first(value);

        if(!validatable.valid) {

            return validatable;
        }

        return next(value);

    } as Validator<
        Allow<First>,
        Expectation<Next>,
        Allowed<First> & Allowed<Next>,
        Expected<Next> & Expected<First>,
        Message<First>|Message<Next>,
        InferValidator<First>|InferValidator<Next>
    >;
}