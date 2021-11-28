export default interface StaticParameters<
    Allow = unknown,
    Argument extends Allow = Allow,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
    ExtraArgument extends unknown[] = unknown[]
> {
    <Value extends Argument>(value: Value, valid: Allowed, ...argument: ExtraArgument) : MessageType;
    <Value extends Expectation>(value: Value, valid: Expected, ...argument: ExtraArgument) : MessageType;
}

