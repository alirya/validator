import SimpleParameters from "./simple-parameters";

export type SimplestParameters<
    Allow = unknown,
    Expectation extends Allow = Allow,
    MessageType = unknown,
    ExtraArgument extends unknown[] = unknown[]
> = SimpleParameters<Allow, Allow, Expectation, MessageType, ExtraArgument>;

export default SimplestParameters;
