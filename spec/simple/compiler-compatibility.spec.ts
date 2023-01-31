import Simple from '../../dist/simple';
import Validator from '../../dist/validator';
import Validatable from '../../dist/validatable/validatable';
import BaseInfer from '../../dist/subject/allow';
import TypeInfer from '../../dist/subject/expectation';
import ValidatorInfer from '../../dist/validatable/infer-static';
import ExtendInfer from '../../dist/subject/expectation';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('compiler compatibility', () => {

    let simple : Simple<unknown, number, string>;
    let validator : Validator<unknown, number, false, true, string>;


    let base : BaseInfer<Simple<unknown, number, string>> = <unknown> 1;
    let type : TypeInfer<Simple<unknown, number, string>> = 1;

    let overload1 : ValidatorInfer<Simple<unknown, number, string>> = {value:1, valid:true, message:'message'};
    let overload2 : ValidatorInfer<Simple<unknown, number, string>> = {value:<unknown>1, valid:false, message:'message'};

    let extend1 : ExtendInfer<Simple<unknown, number, string>> = 1;

    let extend2 : ExtendInfer<Simple<unknown, number, string>> = 1;

});
