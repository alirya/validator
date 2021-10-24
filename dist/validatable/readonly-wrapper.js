/**
 * read only wrapper for {@link Message}, {@link Value} and {@link ValidatableInterface}
 */
export default ReadonlyWrapper;
export class ReadonlyWrapperParameter {
    constructor(valueContainer, messageContainer, validatableContainer) {
        this.valueContainer = valueContainer;
        this.messageContainer = messageContainer;
        this.validatableContainer = validatableContainer;
    }
    get valid() {
        return this.validatableContainer.valid;
    }
    get value() {
        return this.valueContainer.value;
    }
    get message() {
        return this.messageContainer.message;
    }
}
export class ReadonlyWrapperObject extends ReadonlyWrapperParameter {
    constructor(validatable) {
        super(validatable, validatable, validatable);
        this.validatable = validatable;
    }
}
var ReadonlyWrapper;
(function (ReadonlyWrapper) {
    ReadonlyWrapper.Parameter = ReadonlyWrapperParameter;
    ReadonlyWrapper.Object = ReadonlyWrapperObject;
})(ReadonlyWrapper || (ReadonlyWrapper = {}));
//# sourceMappingURL=readonly-wrapper.js.map