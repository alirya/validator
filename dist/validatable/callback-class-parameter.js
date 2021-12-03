import CallbackClassParameters from "./callback-class-parameters";
/**
 * class object argument
 */
/**
 * main implementation
 *
 */
/**
 * destructure argument version
 */
/**
 * destructure argument version
 */
export default class CallbackClassParameter extends CallbackClassParameters {
    constructor({ value, validation, message, argument }) {
        super(value, (value, ...argument) => validation(value, ...argument), () => message(this), argument);
    }
}
//# sourceMappingURL=callback-class-parameter.js.map