import Dynamic from "../dynamic";
import Infer from "@dikac/t-message/message/infer";
import Message from "@dikac/t-message/message";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import StrictOmit from "@dikac/t-object/strict-omit";
/**
 * @param validatable
 *
 * @param message
 * message conversion
 * default : {@see JSON.stringify}
 *
 * @param error
 * error object factory
 * default : {@see ValidatableInvalid}
 */
export declare type InvalidStringMessageArgument<ValidatableType extends Dynamic, Error extends globalThis.Error> = ValidatableContainer<ValidatableType> & Message<(validatable: Infer<ValidatableType>) => string> & {
    error: (validatable: ValidatableType, message: string) => Error;
};
export declare function InvalidStringMessageObject<ValidatableType extends Dynamic>({ validatable }: Pick<InvalidStringMessageArgument<ValidatableType, globalThis.Error>, 'validatable'>): globalThis.Error;
export declare function InvalidStringMessageObject<ValidatableType extends Dynamic>({ validatable, message, }: StrictOmit<InvalidStringMessageArgument<ValidatableType, globalThis.Error>, 'error'>): globalThis.Error;
export declare function InvalidStringMessageObject<ValidatableType extends Dynamic, Error extends globalThis.Error>({ validatable, message, error, }: InvalidStringMessageArgument<ValidatableType, Error>): Error;
export declare function InvalidStringMessageParameter<ValidatableType extends Dynamic>(validatable: ValidatableType, message?: (validatable: Infer<ValidatableType>) => string): globalThis.Error;
export declare function InvalidStringMessageParameter<ValidatableType extends Dynamic, Error extends globalThis.Error>(validatable: ValidatableType, message?: (validatable: Infer<ValidatableType>) => string, error?: (validatable: ValidatableType, message: string) => Error): Error;
declare namespace InvalidStringMessage {
    const Parameter: typeof InvalidStringMessageParameter;
    const Object: typeof InvalidStringMessageObject;
    type Argument<ValidatableType extends Dynamic, Error extends globalThis.Error> = InvalidStringMessageArgument<ValidatableType, Error>;
}
export default InvalidStringMessage;
