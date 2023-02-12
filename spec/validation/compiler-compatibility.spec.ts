import TestString from '../test-string.js';
import Create from '../../dist/validation/create.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('writable', () => {

    const test =   Create(TestString());
    const validatable : boolean = test(1);
});
