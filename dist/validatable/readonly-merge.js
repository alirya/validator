var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";
/**
 * merge {@link Value}, {@link Message} and {@link ValidatableInterface}
 */
export default class ReadonlyMerge {
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
__decorate([
    MemoizeAccessor()
], ReadonlyMerge.prototype, "valid", null);
__decorate([
    MemoizeAccessor()
], ReadonlyMerge.prototype, "value", null);
__decorate([
    MemoizeAccessor()
], ReadonlyMerge.prototype, "message", null);
//# sourceMappingURL=readonly-merge.js.map