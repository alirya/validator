import Validator from '../validator';
import {Return} from './validation';

export default function Validation<ValidatorType extends Validator>(
    validator : ValidatorType,
) : Return<ValidatorType> {

    return function (value) {

        return validator(value).valid;

    } as Return<ValidatorType>;
}
