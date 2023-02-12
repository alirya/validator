import TestObject from '../test-object.js';
import TestString from '../test-string.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', ()=>{

    it('writable', () => {

        const test = TestString();
        const validatable = test(1);

        if(validatable.valid) {

            const boolean : boolean = validatable.valid;
            const value : string = validatable.value;
            const message : string = validatable.message;

            // @ts-expect-error
            validatable.valid = true;
            // @ts-expect-error
            validatable.valid = false;
            // @ts-expect-error
            validatable.value = '5';
            // @ts-expect-error
            validatable.value = 5;
            // @ts-expect-error
            validatable.message = 'message';

        } else {

            const boolean : boolean = validatable.valid;
            // @ts-expect-error
            const value : string = validatable.value;
            const number : number = validatable.value;
            const message : string = validatable.message;

            // @ts-expect-error
            validatable.valid = false;
            // @ts-expect-error
            validatable.valid = true;
            // @ts-expect-error
            validatable.value = 5;
            // @ts-expect-error
            validatable.value = '5';
            // @ts-expect-error
            validatable.message = 'message';
        }
    });

    describe('type', () => {

        const test = TestObject();

        it('typed', () => {

            const validatable = test(test);

            if(validatable.valid) {

                const value : object = validatable.value;


                const exact : ReturnType<typeof TestObject> = validatable.value;

                const boolean : boolean = validatable.valid;
                const message : string = validatable.message;

            } else {

                const boolean : boolean = validatable.valid;

                const value : object = validatable.value;

                const number : ReturnType<typeof TestObject> = validatable.value;

                const message : string = validatable.message;
            }
        });

        it('unknown', () => {

            const validatable = test(<unknown>test);

            if(validatable.valid) {

                // @ts-expect-error
                const string : string = validatable.value;

                const value : object = validatable.value;
                // @ts-expect-error
                const exact : TestObject = validatable.value;

                const boolean : boolean = validatable.valid;

                const message : string = validatable.message;

            } else {

                // @ts-expect-error
                const string : string = validatable.value;

                const boolean : boolean = validatable.valid;

                // @ts-expect-error
                const value : object = validatable.value;

                // @ts-expect-error
                const number : TestObject = validatable.value;

                const message : string = validatable.message;
            }
        });

    });
});
