import SimpleReturn from '../../value/simple.js';
import Dynamic from '../../value/validatable.js';
import ReplaceValue from '@alirya/value/value/replace.js';
import ReplaceValidatable from '@alirya/validatable/boolean/replace.js';

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
    Validatable extends  SimpleReturn<Allow, Expectation, Readonly<Dynamic<Allow>>> =
        SimpleReturn<Allow, Expectation, Readonly<Dynamic<Allow>>>
>  {
    <Value extends Allow>(argument: ReplaceValidatable<ReplaceValue<Validatable, Value>, false>) : MessageType;
    <Value extends Expectation>(argument: ReplaceValidatable<ReplaceValue<Validatable, Value>, true>) : MessageType;
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
