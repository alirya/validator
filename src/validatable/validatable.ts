import Message from '@alirya/message/message';
import DynamicValue from '../value/validatable';

/**
 * extended {@see ValidatableInterface} with added {@see Message}
 * and {@see Value} for {@see Validator} result
 */
export default interface Validatable<
    Base = unknown,
    MessageType = unknown,
    Boolean extends boolean = boolean
> extends Message<MessageType>, DynamicValue<Base, Boolean> {

}

