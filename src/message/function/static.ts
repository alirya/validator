import StaticReturn from '../../value/static';
import Dynamic from '../../value/validatable';
import ReplaceValue from '@alirya/value/value/replace';
import ReplaceValidatable from '@alirya/validatable/boolean/replace';

export interface StaticParameters<
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



export interface StaticParameter<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
    Validatable extends StaticReturn<Allow, Expectation, Allowed, Expected, Readonly<Dynamic<Allow>>> =
        StaticReturn<Allow, Expectation, Allowed, Expected, Readonly<Dynamic<Allow>>>
> {
    <Value extends Allow>(argument: ReplaceValidatable<ReplaceValue<Validatable, Value>, Allowed>) : MessageType;
    <Value extends Expectation>(argument: ReplaceValidatable<ReplaceValue<Validatable, Value>, Expected>) : MessageType;
}


namespace Static {
    export interface Parameters<
        Allow = unknown,
        Expectation = unknown,
        Allowed extends boolean = boolean,
        Expected extends boolean = boolean,
        MessageType = unknown,
        ExtraArgument extends unknown[] = unknown[]
    > extends StaticParameters<
        Allow,
        Expectation,
        Allowed,
        Expected,
        MessageType,
        ExtraArgument
    > {}
    export interface Parameter<
        Allow = unknown,
        Expectation = unknown,
        Allowed extends boolean = boolean,
        Expected extends boolean = boolean,
        MessageType = unknown,
        Validatable extends StaticReturn<Allow, Expectation, Allowed, Expected, Readonly<Dynamic<Allow>>> =
            StaticReturn<Allow, Expectation, Allowed, Expected, Readonly<Dynamic<Allow>>>
    > extends StaticParameter<
        Allow,
        Expectation,
        Allowed,
        Expected,
        MessageType,
        Validatable
    > {}
}
export default Static;
