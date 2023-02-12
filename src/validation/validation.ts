import Validator from '../validator.js';
import Static from '../validatable/static.js';
import Expectation from '../subject/expectation.js';
import Allow from '../subject/allow.js';
import Expected from '../boolean/expected.js';
import Allowed from '../boolean/allowed.js';
import InferStatic from '../validatable/infer-static.js';
import Validatable from '../value/validatable.js';
import InferValidator from '../context/infer-validator.js';

/**
 * transform {@see Validator} to standard validation function that return boolean
 */
export type Return<ValidatorType extends Validator> = {

    <Argument extends Expectation<ValidatorType>>(
        value: Argument
    ): Validatable<Argument, Expected<ValidatorType>, InferValidator<ValidatorType>>['valid'];

    <Argument extends Allow<ValidatorType>>(
        value: Argument
    ): Static<Argument, Expectation<ValidatorType>, Allowed<ValidatorType>, Expected<ValidatorType>, InferStatic<ValidatorType>>['valid'];
};
