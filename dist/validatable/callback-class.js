var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";
export default class CallbackClass {
    constructor({ value, validation, message, }) {
        this.value = value;
        this.validation = validation;
        this.messageFactory = message;
    }
    get valid() {
        return this.validation(this.value);
    }
    get message() {
        return this.messageFactory(this);
    }
}
__decorate([
    MemoizeAccessor()
], CallbackClass.prototype, "valid", null);
__decorate([
    MemoizeAccessor()
], CallbackClass.prototype, "message", null);
//# sourceMappingURL=callback-class.js.map