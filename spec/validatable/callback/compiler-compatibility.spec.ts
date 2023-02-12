import CallbackFunction from '../../../dist/validatable/callback.js';
import CallbackClass from '../../../dist/validatable/callback.js';
import {TestMessageParameter} from './test-message.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('function', function () {

    describe('parameter', function () {

        it('guard', function () {

            const wrapper = CallbackFunction.Parameters({}, (v:unknown) : v is string => true, TestMessageParameter);

            if(wrapper.valid) {

                const string : string = wrapper.value;
                const valid : boolean = wrapper.valid;
                const message : string = wrapper.message;

            } else {

                // @ts-ignore
                const string : string = wrapper.value;
                const valid : boolean = wrapper.valid;
                const message : string = wrapper.message;

            }

        });

        it('validation', function () {

            const v = 12;
            const wrapper = new CallbackClass.ClassParameters<number, number, string>(v, (v: unknown) : boolean => true, TestMessageParameter, []);

            if(wrapper.valid) {

                const string : number = wrapper.value;
                const valid : boolean = wrapper.valid;
                const message : string = wrapper.message;

            } else {

                // @ts-ignore
                const string : number = wrapper.value;
                const valid : boolean = wrapper.valid;
                const message : string = wrapper.message;

            }

        });
    });
});
