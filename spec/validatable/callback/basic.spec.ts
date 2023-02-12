import CallbackFunction from '../../../dist/validatable/callback.js';
import {TestMessageParameter} from './test-message.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('class', function () {

    describe('parameter', function () {

        it('valid', () => {

            const wrapper = new CallbackFunction.ClassParameters({}, (v)=>typeof v === 'object', TestMessageParameter, []);

            expect(wrapper.valid).toBeTrue();
            expect(wrapper.value).toEqual({});
            expect(wrapper.message).toBe('type:object, valid:true');
        });

        it('invalid', () => {

            const wrapper = new CallbackFunction.ClassParameters('str', (v)=>typeof v === 'object', TestMessageParameter, []);

            expect(wrapper.valid).toBeFalse();
            expect(wrapper.value).toBe('str');
            expect(wrapper.message).toBe('type:string, valid:false');
        });

    });
});
