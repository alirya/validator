import Validator from './validator.js';
import Allow from './subject/allow.js';
import Expectation from './subject/expectation.js';
import Allowed from './boolean/allowed.js';
import Expected from './boolean/expected.js';
import Message from './message/message.js';
import InferValidator from './context/infer-validator.js';

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

export {Chain as ChainValidator}