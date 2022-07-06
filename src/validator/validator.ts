import ValidatorInterface from '../validator.js';

/**
 * Container for {@link ValidatorInterface}
 */
export default interface Validators<ValidatorType extends ValidatorInterface> {

    validator :  ValidatorType;
}
