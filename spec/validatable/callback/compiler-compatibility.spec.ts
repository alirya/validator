import CallbackFunction from '../../../dist/validatable/callback-function-parameters';
import CallbackClass from '../../../dist/validatable/callback-class-parameters';
import {TestMessageParameter} from './test-message';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('function', function () {

    describe('parameter', function () {

        it('guard', function () {

            let wrapper = CallbackFunction({}, (v:unknown) : v is string => true, TestMessageParameter);

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

        it('validation', function () {

            let v = 12;
            let wrapper = new CallbackClass<number, string>(v, (v: unknown) : boolean => true, TestMessageParameter, []);

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
