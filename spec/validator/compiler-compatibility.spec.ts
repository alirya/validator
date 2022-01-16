import TestObject from "../tesobject";
import TestString from "../tesstring";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', ()=>{

    describe('writable', () => {

        let test = TestString();
        let validatable = test(1);

        if(validatable.valid) {

            let boolean : boolean = validatable.valid;
            let value : string = validatable.value;
            let message : string = validatable.message;

            validatable.valid = true;
            // @ts-expecerror
            validatable.valid = false;
            validatable.value = '5';
            // @ts-expecerror
            validatable.value = 5;
            validatable.message = 'message';

        } else {

            let boolean : boolean = validatable.valid;
            // @ts-expecerror
            let value : string = validatable.value;
            let number : number = validatable.value;
            let message : string = validatable.message;

            validatable.valid = false;
            // @ts-expecerror
            validatable.valid = true;
            validatable.value = 5;
            // @ts-expecerror
            validatable.value = '5';
            validatable.message = 'message';
        }
    });

    describe('type', () => {

        let test = TestObject();

        describe('typed', () => {

            let validatable = test(test);

            if(validatable.valid) {

                let value : object = validatable.value;

                //@ts-expecerror
                let exact : ReturnType<typeof TestObject> = validatable.value;

                let boolean : boolean = validatable.valid;
                let message : string = validatable.message;

            } else {

                let boolean : boolean = validatable.valid;

                let value : object = validatable.value;

                let number : ReturnType<typeof TestObject> = validatable.value;

                let message : string = validatable.message;
            }
        });

        describe('unknown', () => {

            let validatable = test(<unknown>test);

            if(validatable.valid) {

                // @ts-expecerror
                let string : string = validatable.value;

                let value : object = validatable.value;
                // @ts-expecerror
                let exact : TestObject = validatable.value;

                let boolean : boolean = validatable.valid;

                let message : string = validatable.message;

            } else {

                // @ts-expecerror
                let string : string = validatable.value;

                let boolean : boolean = validatable.valid;

                // @ts-expecerror
                let value : object = validatable.value;

                // @ts-expecerror
                let number : TestObject = validatable.value;

                let message : string = validatable.message;
            }
        });

    });
});
