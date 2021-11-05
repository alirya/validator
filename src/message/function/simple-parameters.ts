export type SimpleParameters<
    Allow = unknown,
    Expectation extends Allow = Allow,
    MessageType = unknown
> =
    (<Value extends Allow>(value: Value, valid: false) => MessageType) |
    (<Value extends Expectation>(value: Value, valid: true) => MessageType);

export default SimpleParameters;
