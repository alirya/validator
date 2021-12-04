import Simple from "./simple";
import Validatable from "./validatable/validatable";
import SimpleMessage from "./message/function/simple-parameters";
import ValidatableType from "./validatable/validatable";
import StaticMessage from "./message/function/static-parameters";
import Validator from "./validator";
import Validation from "@dikac/t-boolean/function/validation";
import Guard from "@dikac/t-boolean/function/guard";
/**
 * create {@see Validator} from multiple callback
 */
/**
 * Simple guard
 *
 * @param validation
 * @param message
 * @constructor
 */
export default function CallbackParameters<Allow = unknown, Expectation extends Allow = Allow, MessageType = unknown>(validation: Guard<Allow, Expectation>, message: SimpleMessage<Allow, Expectation, MessageType>): Simple<Allow, Expectation, Readonly<Validatable<Allow, MessageType>>>;
/**
 * Simple validation
 *
 * @param validation
 * @param message
 * @constructor
 */
export default function CallbackParameters<Allow = unknown, Expectation extends Allow = Allow, MessageType = unknown>(validation: Validation<[Allow]>, message: SimpleMessage<Allow, Expectation, MessageType>): Simple<Allow, Expectation, Readonly<Validatable<Allow, MessageType>>>;
/**
 * Simple guard
 *
 * @param validation
 * @param message
 * @constructor
 */
export default function CallbackParameters<Allow = unknown, Expectation extends Allow = Allow, MessageType = unknown, Arguments extends unknown[] = unknown[]>(validation: Guard<Allow, Expectation, Arguments>, message: SimpleMessage<Allow, Expectation, MessageType, Arguments>): Simple<Allow, Expectation, Readonly<Validatable<Allow, MessageType>>>;
/**
 * Simple validation
 *
 * @param validation
 * @param message
 * @constructor
 */
export default function CallbackParameters<Allow = unknown, Expectation extends Allow = Allow, MessageType = unknown, Arguments extends unknown[] = unknown[]>(validation: Validation<[Allow, ...Arguments]>, message: SimpleMessage<Allow, Expectation, MessageType, Arguments>): Simple<Allow, Expectation, Readonly<Validatable<Allow, MessageType>>>;
/**
 * Static guard
 *
 * @param validation
 * @param message
 * @constructor
 */
export default function CallbackParameters<Allow = any, Expectation extends Allow = Allow, Allowed extends boolean = boolean, Expected extends boolean = boolean, MessageType = unknown>(validation: Guard<Allow, Expectation>, message: StaticMessage<Allow, Expectation, Allowed, Expected, MessageType>): Validator<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, MessageType>>;
/**
 * static validation
 *
 * @param validation
 * @param message
 * @constructor
 */
export default function CallbackParameters<Allow = any, Expectation extends Allow = Allow, Allowed extends boolean = boolean, Expected extends boolean = boolean, MessageType = unknown>(validation: Validation<[Allow], Allowed | Expected>, message: StaticMessage<Allow, Expectation, Allowed, Expected, MessageType>): Validator<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, MessageType>>;
/**
 * Static guard argument
 *
 * @param validation
 * @param message
 * @constructor
 */
export default function CallbackParameters<Allow = any, Expectation extends Allow = Allow, Allowed extends boolean = boolean, Expected extends boolean = boolean, MessageType = unknown, Arguments extends unknown[] = unknown[]>(validation: Guard<Allow, Expectation, Arguments>, message: StaticMessage<Allow, Expectation, Allowed, Expected, MessageType, Arguments>): Validator<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, MessageType>>;
/**
 * static validation argument
 *
 * @param validation
 * @param message
 * @constructor
 */
export default function CallbackParameters<Allow = any, Expectation extends Allow = Allow, Allowed extends boolean = boolean, Expected extends boolean = boolean, MessageType = unknown, Arguments extends unknown[] = unknown[]>(validation: Validation<[Allow, ...Arguments], Allowed | Expected>, message: StaticMessage<Allow, Expectation, Allowed, Expected, MessageType, Arguments>): Validator<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, MessageType>>;
