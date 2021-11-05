export default class ReadonlyWrapperParameters {
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
//# sourceMappingURL=readonly-wrapper-parameters.js.map