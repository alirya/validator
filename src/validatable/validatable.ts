import Message from '@alirya/message/message';
import Value from '@alirya/value/value';
import BaseValidatable from '@alirya/validatable/validatable';

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