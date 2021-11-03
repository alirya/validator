var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";
/**
 * main implementation
 *
 */
export class CallbackParameter {
    /**
     *
     * @param value
     * value to be validated by {@param validation}
     *
     * @param validation
     *
     * @param messageFactory
     * to generate message
     *
     * @param argument
     */
    constructor(value, validation, messageFactory, argument) {
        this.value = value;
        this.validation = validation;
        this.messageFactory = messageFactory;
        this.argument = argument;
    }
    get valid() {
        return this.validation(this.value, ...this.argument);
    }
    get message() {
        return this.messageFactory(this.value, this.valid, ...this.argument);
    }
}
__decorate([
    MemoizeAccessor()
], CallbackParameter.prototype, "valid", null);
__decorate([
    MemoizeAccessor()
], CallbackParameter.prototype, "message", null);
/**
 * destructure argument version
 */
export class CallbackObject extends CallbackParameter {
    constructor({ value, validation, message, argument }) {
        super(value, validation, () => message(this), argument);
    }
}
export function CallbackFunctionObject(argument) {
    if (!argument.argument) {
        argument.argument = [];
    }
    return new CallbackObject(argument);
}
/**
 * parameter argument implementation for function
 */
export function CallbackFunctionParameter(value, validation, message, argument = []) {
    return new CallbackParameter(value, validation, message, argument);
}
/**
 * namespace aliases
 */
var Callback;
(function (Callback) {
    let Class;
    (function (Class) {
        Class.Parameter = CallbackParameter;
        Class.Object = CallbackObject;
    })(Class = Callback.Class || (Callback.Class = {}));
    let Function;
    (function (Function) {
        Function.Parameter = CallbackFunctionParameter;
        Function.Object = CallbackFunctionObject;
    })(Function = Callback.Function || (Callback.Function = {}));
})(Callback || (Callback = {}));
export default Callback;
//# sourceMappingURL=callback.js.map