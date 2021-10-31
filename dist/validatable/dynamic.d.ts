import Message from "@dikac/t-message/message";
import DynamicValue from "../value/dynamic";
/**
 * extended {@see ValidatableInterface} with added {@see Message}
 * and {@see Value} for {@see Validator} result
 */
declare type Dynamic<Base = unknown, MessageType = unknown, Boolean extends boolean = boolean> = Message<MessageType> & DynamicValue<Base, Boolean>;
export default Dynamic;
