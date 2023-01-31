import Validator from '../validator';
import Static from '../validatable/static';
import Expectation from '../subject/expectation';
import Allow from '../subject/allow';
import Expected from '../boolean/expected';
import Allowed from '../boolean/allowed';
import InferStatic from '../validatable/infer-static';
import Validatable from '../value/validatable';
import InferValidator from '../context/infer-validator';

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
