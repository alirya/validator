import Validatable from './validatable';
import InvalidStringMessage from './error/invalid-string-message';
import ReplaceValidatable from '@alirya/validatable/boolean/replace';


export function EnsureValidParameters<
    ValidatableType extends Validatable = Validatable
>(
    validatable : ValidatableType,
    error : (validatable: ValidatableType)=>Error = InvalidStringMessage.Parameters
) : ReplaceValidatable<ValidatableType, true> {

    if(!validatable.valid) {

        throw error(validatable);
    }

    return validatable as ReplaceValidatable<ValidatableType, true>;
}

export type EnsureValidArgument<ValidatableType extends Validatable> = {
    validatable : ValidatableType,
    error ?: (validatable: ValidatableType)=>Error
};

export function EnsureValidParameter<
    ValidatableType extends Validatable = Validatable
>(  {
        validatable,
        error = InvalidStringMessage.Parameters
} : EnsureValidArgument<ValidatableType>) : ReplaceValidatable<ValidatableType, true> {

    return EnsureValidParameters(validatable, error);
}

namespace EnsureValid {
    export const Parameters = EnsureValidParameters;
    export const Parameter = EnsureValidParameter;
    export type Argument<ValidatableType extends Validatable> = EnsureValidArgument<ValidatableType>;
}
export default EnsureValid;