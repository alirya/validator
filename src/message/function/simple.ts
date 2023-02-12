import SimpleReturn from '../../value/simple.js';
import Dynamic from '../../value/validatable.js';

export interface SimpleParameters<
    Allow = unknown,
    Expectation = unknown,
    MessageType = unknown,
    ExtraArgument extends unknown[] = unknown[]
>  {

    <Value extends Allow>(value: Value, valid: false, ...extra: ExtraArgument) : MessageType;
    <Value extends Expectation>(value: Value, valid: true, ...extra: ExtraArgument) : MessageType;
}


export interface SimpleParameter<
    Allow = unknown,
    Expectation = unknown,
    MessageType = unknown,
    Context extends object = {}
>  {
    <Value extends Allow>(argument: Dynamic<Value, false, Context>) : MessageType;
    <Value extends Expectation>(argument: Dynamic<Value, true, Context>) : MessageType;
}


namespace Simple {
    export type Parameters<
        Allow = unknown,
        Expectation = unknown,
        MessageType = unknown,
        ExtraArgument extends unknown[] = unknown[]
    > = SimpleParameters<
        Allow,
        Expectation,
        MessageType,
        ExtraArgument
    >
    export type Parameter<
        Allow = unknown,
        Expectation = unknown,
        MessageType = unknown,
        Validatable extends  SimpleReturn<Allow, Expectation, Readonly<Dynamic<Allow>>> =
            SimpleReturn<Allow, Expectation, Readonly<Dynamic<Allow>>>
    > = SimpleParameter<
        Allow,
        Expectation,
        MessageType,
        Validatable
    >
}
export default Simple;
