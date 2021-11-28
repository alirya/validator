export type SimpleParameters<
    Allow = unknown,
    Argument extends Allow = Allow,
    Expectation extends Allow = Allow,
    MessageType = unknown,
    ExtraArgument extends unknown[] = unknown[]
> =
    (<Value extends Argument>(value: Value, valid: false, ...extra: ExtraArgument) => MessageType) |
    (<Value extends Expectation>(value: Value, valid: true, ...extra: ExtraArgument) => MessageType);

export default SimpleParameters;
