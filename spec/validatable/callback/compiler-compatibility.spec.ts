import CallbackFunction from "../../../dist/validatable/callback";
import TestMessage from "./test-message";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});



describe('guard', function () {

    let wrapper = CallbackFunction({}, (v:unknown) : v is string => true, TestMessage);

    if(wrapper.valid) {

        let string : string = wrapper.value;
        let valid : boolean = wrapper.valid;
        let message : string = wrapper.message;

    } else {

        // @ts-ignore
        let string : string = wrapper.value;
        let valid : boolean = wrapper.valid;
        let message : string = wrapper.message;

    }

});

describe('validate', function () {

    let v = 12;
    let wrapper = CallbackFunction(v, (v: unknown) : boolean => true, TestMessage);

    if(wrapper.valid) {

        let string : number = wrapper.value;
        let valid : boolean = wrapper.valid;
        let message : string = wrapper.message;

    } else {

        // @ts-ignore
        let string : number = wrapper.value;
        let valid : boolean = wrapper.valid;
        let message : string = wrapper.message;

    }

});
