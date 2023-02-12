import {ReadonlyWrapperParameters} from '../../../dist/validatable/readonly-wrapper.js';
import {ReadonlyWrapperParameter} from '../../../dist/validatable/readonly-wrapper.js';
import Validatable from '@alirya/validatable/validatable.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('construct', function () {

    it('data', () => {

        const standard = new ReadonlyWrapperParameters(
            {value:1},
            {message:'message'},
            {valid:true},
        );

        const wrapper = new ReadonlyWrapperParameter(standard);

        expect(wrapper.valid).toBeTrue();
        expect(wrapper.value).toBe(1);
        expect(wrapper.message).toBe('message');
    });

});


describe('set', function () {

    it('data', () => {

        const standard = new ReadonlyWrapperParameters(
            {value:3},
            {message:'message 2'},
            <Validatable<boolean>>{valid:false},
        );

        const wrapper = new ReadonlyWrapperParameter(standard);

        expect(wrapper.valid).toBeFalse();
        expect(wrapper.value).toBe(3);
        expect(wrapper.message).toBe('message 2');
    });

});
