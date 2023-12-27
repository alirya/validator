import Message from '@axiona/message/message.js';
import Value from '@axiona/value/value.js';
import BaseValidatable from '@axiona/validatable/validatable.js';

/**
 * extended {@see ValidatableInterface} with added {@see Message}
 * and {@see Value} for {@see Validator} result
 */
type Validatable<
    Base = unknown,
    MessageType = unknown,
    Boolean extends boolean = boolean,
    Context extends object = {},
> = Readonly<Message<MessageType> & Value<Base>  & BaseValidatable<Boolean> & Context>;

export default Validatable;
