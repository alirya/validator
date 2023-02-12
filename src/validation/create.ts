import Validator from '../validator.js';
import {Return} from './validation.js';

export default function Validation<ValidatorType extends Validator>(
    validator : ValidatorType,
) : Return<ValidatorType> {

    return function (value) {

        return validator(value).valid;

    } as Return<ValidatorType>;
}
