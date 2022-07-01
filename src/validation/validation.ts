import Validator from '../validator';
import Replace from '../validatable/replace';
import Static from '../validatable/static';
import Expectation from '../subject/expectation';
import Allow from '../subject/allow';
import Expected from '../boolean/expected';
import Allowed from '../boolean/allowed';
import InferStatic from '../validatable/infer-static';

/**
 * transform {@see Validator} to standard validation function that return boolean
 */
export type Return<ValidatorType extends Validator> = {

    <Argument extends Expectation<ValidatorType>>(
        value: Argument
    ): Replace<Argument, Expected<ValidatorType>, InferStatic<ValidatorType>>['valid'];

    <Argument extends Allow<ValidatorType>>(
        value: Argument
    ): Static<Argument, Expectation<ValidatorType>, Allowed<ValidatorType>, Expected<ValidatorType>, InferStatic<ValidatorType>>['valid'];
};
