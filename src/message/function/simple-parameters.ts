export default interface SimpleParameters<
    Allow = unknown,
    Expectation extends Allow = Allow,
    MessageType = unknown,
    ExtraArgument extends unknown[] = unknown[]
>  {

    <Value extends Allow>(value: Value, valid: false, ...extra: ExtraArgument) : MessageType;
    <Value extends Expectation>(value: Value, valid: true, ...extra: ExtraArgument) : MessageType;
}

