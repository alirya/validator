export type DynamicParameters<
    Base = unknown,
    MessageType = unknown,
    ExtraArgument extends unknown[] = unknown[]
> =
    (<Argument extends Base>(value: Argument, valid: boolean, ...extra:ExtraArgument) => MessageType);

export default DynamicParameters;
