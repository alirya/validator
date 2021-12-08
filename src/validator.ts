import Static from "./validatable/static";
import Validatable from "./validatable/validatable";
import ValidatableType from "./validatable/validatable";

/**
 * {@template Allow} type which can be handled by implementation
 *
 * {@template Expectation} desired value type
 *
 * {@template Allowed} result to be used for matching {@template Allow} or
 * for {@template AllowArgument} if extends {@template Allow}
 *
 * {@template Expected} result to be used for matching {@template Expectation} or
 * for {@template ExpectedArgument} if extends {@template Expectation}
 *
 * {@template ValidatableType} return value for {@see Validator} callback
 */

export default interface Validator<
    Allow = unknown,
    Expectation = unknown,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Validatable extends ValidatableType = ValidatableType
> {
     <Argument extends Allow>(value: Argument): Static<Argument, Expectation, Allowed, Expected, Validatable>;
     <Argument extends Expectation>(value: Argument): Static<Allow, Argument, Allowed, Expected, Validatable>;
}
















import ValidatableEqual from "@dikac/t-boolean/validatable/equal-parameters";
import Simple from "./simple";
import Dynamic from "./message/function/validatable-parameters";
import EqualMessage from "@dikac/t-boolean/assert/string/equal-parameters";



/**
 * {@template Base} type which can be handled by implmentation
 * {@template Type} valid value type
 */

function EqualParameters<
    Base = unknown,
    Type = unknown,
    MessageType = unknown,
    >(
    compare : Type,
    message : Dynamic<Base, MessageType, [Type]>,
) : Simple<Base, Type, Validatable<Base, MessageType>>

function EqualParameters<
    Base = unknown,
    Type = unknown,
    >(
    compare : Type,
) : Simple<Base, Type, Validatable<Base, string>>

function EqualParameters<
    Base = unknown,
    Type = unknown,
    MessageType = unknown,
    >(
    compare : Type,
    message : Dynamic<Base, MessageType|string, [Type]> = EqualMessage,
) : Simple<Base, Type, Validatable<Base, MessageType|string>> {

    return function (value)  {

        return ValidatableEqual(value, compare, message as any);

    } as Simple<Base, Type, Validatable<Base, MessageType>>
}


let validator = EqualParameters<number, 1>(1,  EqualMessage)

let equal = validator(2);

if(equal.valid) {

    let specific : 1 = equal.value;
    let number : number = equal.value;
    let unknown : unknown = equal.value;

} else {

    let specific : 2 = equal.value;
    let number : number = equal.value;
    let unknown : unknown = equal.value;
}
