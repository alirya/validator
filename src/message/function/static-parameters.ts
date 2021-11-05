export type StaticParameters<
    Allow = unknown,
    Argument extends Allow = Allow,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown
> =
    (<Value extends Argument>(value: Value, valid: Allowed) => MessageType) |
    (<Value extends Expectation>(value: Value, valid: Expected) => MessageType);

export default StaticParameters;
