import TestString from '../test-string';
import Create from '../../dist/validation/create';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('writable', () => {

    let test =   Create(TestString());
    let validatable : boolean = test(1);
});
