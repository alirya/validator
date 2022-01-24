import WrapperMergeParameters from '../../../dist/validatable/readonly-wrapper-parameters';
import WrapperMergeParameter from '../../../dist/validatable/readonly-wrapper-parameter';
import Validatable from '@alirya/validatable/validatable';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('construct', function () {

    it('data', () => {

        let standard = new WrapperMergeParameters(
            {value:1},
            {message:'message'},
            {valid:true},
        );

        let wrapper = new WrapperMergeParameter(standard);

        expect(wrapper.valid).toBeTrue();
        expect(wrapper.value).toBe(1);
        expect(wrapper.message).toBe('message');
    });

});


describe('set', function () {

    it('data', () => {

        let standard = new WrapperMergeParameters(
            {value:3},
            {message:'message 2'},
            <Validatable<boolean>>{valid:false},
        );

        let wrapper = new WrapperMergeParameter(standard);

        expect(wrapper.valid).toBeFalse();
        expect(wrapper.value).toBe(3);
        expect(wrapper.message).toBe('message 2');
    });

});
