import CallbackFunction from "../../../dist/validatable/callback";
import TestMessage from "./test-message";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('construct', function () {

    it("data", () => {

        let wrapper = CallbackFunction({}, (v)=>typeof v === "object", TestMessage);

        expect(wrapper.valid).toBeTrue()
        expect(wrapper.value).toEqual({})
        expect(wrapper.message).toBe('type:object, valid:true')
    });

});


describe('set', function () {

    it("data", () => {

        let wrapper = CallbackFunction('str', (v)=>typeof v === "object", TestMessage);

        expect(wrapper.valid).toBeFalse()
        expect(wrapper.value).toBe('str')
        expect(wrapper.message).toBe('type:string, valid:false')
    });

});
