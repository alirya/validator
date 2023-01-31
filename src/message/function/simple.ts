import SimpleReturn from '../../value/simple';
import Dynamic from '../../value/validatable';

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
    export interface Parameters<
        Allow = unknown,
        Expectation = unknown,
        MessageType = unknown,
        ExtraArgument extends unknown[] = unknown[]
    > extends SimpleParameters<
        Allow,
        Expectation,
        MessageType,
        ExtraArgument
    > {}
    export interface Parameter<
        Allow = unknown,
        Expectation = unknown,
        MessageType = unknown,
        Validatable extends  SimpleReturn<Allow, Expectation, Readonly<Dynamic<Allow>>> =
            SimpleReturn<Allow, Expectation, Readonly<Dynamic<Allow>>>
    > extends SimpleParameter<
        Allow,
        Expectation,
        MessageType,
        Validatable
    > {}
}
export default Simple;
