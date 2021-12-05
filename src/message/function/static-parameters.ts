export default interface StaticParameters<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
    ExtraArgument extends unknown[] = unknown[]
> {
    <Value extends Allow>(value: Value, valid: Allowed, ...argument: ExtraArgument) : MessageType;
    <Value extends Expectation>(value: Value, valid: Expected, ...argument: ExtraArgument) : MessageType;
}

