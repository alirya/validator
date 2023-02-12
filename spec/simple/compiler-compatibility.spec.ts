import Simple from '../../dist/simple.js';
import Validator from '../../dist/validator.js';
import Validatable from '../../dist/validatable/validatable.js';
import BaseInfer from '../../dist/subject/allow.js';
import TypeInfer from '../../dist/subject/expectation.js';
import ValidatorInfer from '../../dist/validatable/infer-static.js';
import ExtendInfer from '../../dist/subject/expectation.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('compiler compatibility', () => {

    let simple : Simple<unknown, number, string>;
    let validator : Validator<unknown, number, false, true, string>;


    const base : BaseInfer<Simple<unknown, number, string>> = <unknown> 1;
    const type : TypeInfer<Simple<unknown, number, string>> = 1;

    const overload1 : ValidatorInfer<Simple<unknown, number, string>> = {value:1, valid:true, message:'message'};
    const overload2 : ValidatorInfer<Simple<unknown, number, string>> = {value:<unknown>1, valid:false, message:'message'};

    const extend1 : ExtendInfer<Simple<unknown, number, string>> = 1;

    const extend2 : ExtendInfer<Simple<unknown, number, string>> = 1;

});
