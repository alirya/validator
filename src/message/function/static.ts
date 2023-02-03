import Validatable from '../../value/validatable';

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
    Context extends object = {}
> {
    <Value extends Allow>(argument: Validatable<Value, Allowed, Context>) : MessageType;
    <Value extends Expectation>(argument: Validatable<Value, Expected, Context>) : MessageType;
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
        Validatable extends object = {}
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
