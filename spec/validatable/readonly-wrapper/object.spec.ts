import WrapperMerge from '../../../dist/validatable/readonly-wrapper.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('construct', function () {

    it('data', () => {

        const wrapper = new WrapperMerge.Parameter({
            value: 1,
            message: 'message',
            valid: true,
        });

        expect(wrapper.valid).toBeTrue();
        expect(wrapper.value).toBe(1);
        expect(wrapper.message).toBe('message');
    });

});


describe('set', function () {

    it('data', () => {
        const value =  {value:1};
        const message = {message:'message'};
        const validatable =  {valid:true};
        const wrapper = new WrapperMerge.Parameter({...value, ...message, ...validatable});

        wrapper.validatable.value = 3;
        wrapper.validatable.valid = false;
        wrapper.validatable.message = 'message 2';

        expect(wrapper.message).toBe('message 2');
        expect(wrapper.valid).toBeFalse();
        expect(wrapper.value).toBe(3);
    });

});
