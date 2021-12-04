export default interface ValidatableParameters<Base = unknown, MessageType = unknown, ExtraArgument extends unknown[] = unknown[], Boolean extends boolean = boolean> {
    <Argument extends Base>(value: Argument, valid: Boolean, ...extra: ExtraArgument): MessageType;
}
