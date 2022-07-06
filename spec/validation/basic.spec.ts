import TestString from '../test-string.js';
import Create from '../../dist/validation/create.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('writable', () => {

    let test =   Create(TestString());
    expect(test(1)).toBe(false);
    expect(test('1')).toBe(true);
});
