import Dynamic from '../../value/validatable';

export interface  ValidatableParameters<
    Base = unknown,
    MessageType = unknown,
    ExtraArgument extends unknown[] = unknown[],
    Boolean extends boolean = boolean
> {

    <Argument extends Base>(value: Argument, valid: Boolean, ...extra:ExtraArgument) : MessageType;
}



export interface ValidatableParameter<
    Base = unknown,
    MessageType = unknown,
    ValidatableType extends Dynamic<Base> = Dynamic<Base>,
> {

    <Argument extends Base>(argument: ValidatableType) : MessageType;
}


namespace Validatable {
    export type Parameters<
        Base = unknown,
        MessageType = unknown,
        ExtraArgument extends unknown[] = unknown[],
        Boolean extends boolean = boolean
    > = ValidatableParameters<
        Base,
        MessageType,
        ExtraArgument,
        Boolean
    >;
    export type Parameter<
        Base = unknown,
        MessageType = unknown,
        ValidatableType extends Dynamic<Base> = Dynamic<Base>,
    > = ValidatableParameter<
        Base,
        MessageType,
        ValidatableType
    >;
}
export default Validatable;
