import Simple from '../../dist/simple.js';
import Validator from '../../dist/validator.js';
import Validatable from '../../dist/validatable/validatable.js';
import BaseInfer from '../../dist/subject/allow.js';
import TypeInfer from '../../dist/subject/expectation.js';
import ValidatorInfer from '../../dist/validatable/infer-static.js';
import ExtendInfer from '../../dist/subject/expectation.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('compiler compatibility', () => {

    let simple : Simple<unknown, number, Validatable<unknown, string>>;
    let validator : Validator<unknown, number, false, true, Validatable<number, string>>;


    let base : BaseInfer<Simple<unknown, number, Validatable<unknown, string>>> = <unknown> 1;
    let type : TypeInfer<Simple<unknown, number, Validatable<unknown, string>>> = 1;

    let overload1 : ValidatorInfer<Simple<unknown, number, Validatable<unknown, string>>> = {value:1, valid:true, message:'message'};
    let overload2 : ValidatorInfer<Simple<unknown, number, Validatable<unknown, string>>> = {value:<unknown>1, valid:false, message:'message'};

    let extend1 : ExtendInfer<Simple<unknown, number, Validatable<unknown, string>>> = 1;

    let extend2 : ExtendInfer<Simple<unknown, number, Validatable<unknown, string>>> = 1;

});
