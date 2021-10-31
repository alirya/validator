import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Dynamic from "./validatable/dynamic";
import ValidationCallback from "./validatable/callback";
import Validation from "@dikac/t-boolean/validation/validation";
import BaseMessage from "@dikac/t-message/message";
import Guard from "@dikac/t-boolean/validation/guard";
import Message from "./message/function/static";

/**
 * create {@see Validator} from multiple callback
 */

export type CallbackMessage<
    Base = unknown,
    Type extends Base = Base,
    MessageType = unknown
> = Message.Parameter<Base, Type, MessageType>;

export type CallbackType<
    Base = unknown,
    Type extends Base = Base,
    MessageType = unknown
> = Simple<Base, Type, Readonly<Dynamic<Base, MessageType>>>;

export type CallbackArgument<
    Base = unknown,
    Type extends Base = Base,
    MessageType = unknown,
    > =
    BaseMessage<<Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Dynamic<Base, MessageType>>>, 'message'>) => MessageType>

export function CallbackObject<
    Base = unknown,
    Type extends Base = Base,
    MessageType = unknown,
>(
    {
        validation,
        message
    } : CallbackArgument<Base, Type, MessageType> & Guard<Base, Type>
) : Simple<Base, Type, Readonly<Dynamic<Base, MessageType>>>;
export function CallbackObject<
    Base = unknown,
    Type extends Base = Base,
    MessageType = unknown,
>(
    {
        validation,
        message
    } : CallbackArgument<Base, Type, MessageType> & Validation<[Base]>
) : Simple<Base, Type, Readonly<Dynamic<Base, MessageType>>>;

export function CallbackObject<
    Base = unknown,
    Type extends Base = Base,
    MessageType = unknown,
>(
    {
        validation,
        message
    } : CallbackArgument<Base, Type, MessageType> & Validation<[Base]>
) : Simple<Base, Type, Readonly<Dynamic<Base, MessageType>>> {

    return function (value) {

        return new ValidationCallback.Class.Object({value, validation, message});

    } as Simple<Base, Type, Readonly<Dynamic<Base, MessageType>>>
}


export function CallbackParameter<
    Base = unknown,
    Type extends Base = Base,
    MessageType = unknown,
>(
    validation : <Argument extends Base>(argument:Base) => argument is Type,
    // message : <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageType>>>, 'message'>) => MessageType,
    message : CallbackMessage<Base, Type, MessageType>,

) : Simple<Base, Type, Readonly<Dynamic<Base, MessageType>>>;
export function CallbackParameter<
    Base = unknown,
    Type extends Base = Base,
    MessageType = unknown,
>(
    validation : <Argument extends Base>(argument:Base) => boolean,
    //  message : <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageType>>>, 'message'>) => MessageType,
    message : CallbackMessage<Base, Type, MessageType>,
) : Simple<Base, Type, Readonly<Dynamic<Base, MessageType>>>;

export function CallbackParameter<
    Base = unknown,
    Type extends Base = Base,
    MessageType = unknown,
>(
    validation : <Argument extends Base>(argument:Base) => boolean,
    message : CallbackMessage<Base, Type, MessageType>,
    //message : <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageType>>>, 'message'>) => MessageType,
) : Simple<Base, Type, Readonly<Dynamic<Base, MessageType>>> {

    return function (value) {

        return new ValidationCallback.Class.Parameter(value, validation, message);

    } as Simple<Base, Type, Readonly<Dynamic<Base, MessageType>>>
}


namespace Callback {

    export const Object = CallbackObject;
    export const Parameter = CallbackParameter;
    export type Type<Base = unknown, Type extends Base = Base, MessageType = unknown> = CallbackType<Base, Type, MessageType>;
    export type Argument<Base = unknown, Type extends Base = Base, MessageType = unknown> = CallbackArgument<Base, Type, MessageType>;
    export type Message<Base = unknown, Type extends Base = Base, MessageType = unknown> = CallbackMessage<Base, Type, MessageType>;
}


export default Callback;
