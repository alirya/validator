import CallbackFunction from "../../../dist/validatable/callback";
import {TestMessageParameter} from "./tesmessage";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('function', function () {

    describe('parameter', function () {

        describe('guard', function () {

            let wrapper = CallbackFunction.Function.Parameters({}, (v:unknown) : v is string => true, TestMessageParameter);

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

        describe('validation', function () {

            let v = 12;
            let wrapper = new CallbackFunction.Class.Parameters<number, string>(v, (v: unknown) : boolean => true, TestMessageParameter, []);

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
    });
});
