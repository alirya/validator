import Value from "@dikac/t-value/value";
import BaseValidatable from "@dikac/t-validatable/validatable";
import Static from "./static";
import Message from "@dikac/t-message/message";
import Simple from "./simple";
import ValidatableType from "./validatable";
import StaticParameters from "../message/function/static-parameters";
/**
 * assemble {@see Validatable} from value,
 * callback validation, and callback message
 *
 * this contain multiple class and function implementation
 *
 * function implementation version offer
 * more accurate type
 */
export declare type CallbackFunctionType<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> = Simple<ValueType, Type, Readonly<Value<ValueType> & BaseValidatable & Message<MessageType>>>;
export default function CallbackFunctionParameters<Allow = unknown, Expectation extends Allow = Allow, Allowed extends boolean = boolean, Expected extends boolean = boolean, Message = unknown, Arguments extends unknown[] = unknown[]>(value: Allow, validation: (value: Allow, ...extra: Arguments) => Allowed | Expected, message: StaticParameters<Allow, Expectation, Allowed, Expected, Message, Arguments>, argument: Arguments): Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, Message>>;
