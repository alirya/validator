import Validatable from "./validatable";
export default function Create<Value, Valid extends boolean, Message>(value: Value, valid: Valid, message: Message): Validatable<Value, Message, Valid>;
