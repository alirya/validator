import CallbackClassParameters from "./callback-class-parameters";
//
// /**
//  * guard
//  *
//  * @param value
//  * @param validation
//  * @param message
//  * @param argument
//  * @constructor
//  */
// export default function CallbackFunctionParameters<
//     ValueType = unknown,
//     Type extends ValueType = ValueType,
//     MessageType = unknown,
//     Argument extends unknown[] = unknown[],
// >(
//     value : ValueType,
//     validation : (value:ValueType, ...extra: Argument)=>value is Type,
//     message : (value:ValueType, message: boolean, ...extra: Argument)=> MessageType,
//     argument : Argument,
// ) : CallbackFunctionType<ValueType, Type, MessageType>
//
// /**
//  * boolean
//  *
//  * @param value
//  * @param validation
//  * @param message
//  * @param argument
//  * @constructor
//  */
// export default function CallbackFunctionParameters<
//     ValueType = unknown,
//     Type extends ValueType = ValueType,
//     MessageType = unknown,
//     Argument extends unknown[] = unknown[],
// >(
//     value : Type,
//     validation : (value:ValueType, ...extra: Argument)=>boolean,
//     message : (value:ValueType, message: boolean, ...extra: Argument)=> MessageType,
//     argument : Argument,
// ) : CallbackFunctionType<ValueType, Type, MessageType>
//
// /**
//  * guard
//  *
//  * @param value
//  * @param validation
//  * @param message
//  * @constructor
//  */
// export default function CallbackFunctionParameters<
//     ValueType = unknown,
//     Type extends ValueType = ValueType,
//     MessageType = unknown,
// >(
//     value : ValueType,
//     validation : (value:ValueType)=>value is Type,
//     message : (value:ValueType, message: boolean)=> MessageType,
// ) : CallbackFunctionType<ValueType, Type, MessageType>
//
// /**
//  * boolean
//  *
//  * @param value
//  * @param validation
//  * @param message
//  * @constructor
//  */
// export default function CallbackFunctionParameters<
//     ValueType = unknown,
//     Type extends ValueType = ValueType,
//     MessageType = unknown,
// >(
//     value : Type,
//     validation : (value:ValueType)=>boolean,
//     message : (value:ValueType, message: boolean)=> MessageType,
// ) : CallbackFunctionType<ValueType, Type, MessageType>
//
//
// /**
//  * simple
//  */
// export default function CallbackFunctionParameters<
//     Allow = unknown,
//     Expectation extends Allow = Allow,
//     Validatable extends ValidatableType<Allow> = ValidatableType<Allow>,
// >(
//     value : Allow,
//     validation : (value:Allow)=>boolean,
//     message : (value:Allow, message: boolean)=> Infer<Validatable>,
// ) : Readonly<Simple<Allow, Expectation, Validatable>>
//
// export default function CallbackFunctionParameters<
//     Allow = unknown,
//     Expectation extends Allow = Allow,
//     Validatable extends ValidatableType<Allow> = ValidatableType<Allow>,
//     Arguments extends unknown[] = unknown[],
// >(
//     value : Allow,
//     validation : (value:Allow, ...extra)=>boolean,
//     message : (value:Allow, message: boolean, ...extra)=> Infer<Validatable>,
//     argument : Arguments,
// ) : Readonly<Simple<Allow, Expectation, Validatable>>
//
//
//
// /**
//  * static
//  */
// export default function CallbackFunctionParameters<
//     Allow = unknown,
//     Expectation extends Allow = Allow,
//     Allowed extends boolean = boolean,
//     Expected extends boolean = boolean,
//     Validatable extends ValidatableType<Allow> = ValidatableType<Allow>,
// >(
//     value : Allow,
//     validation : (value:Allow)=>boolean,
//     message : (value:Allow, message: boolean)=> Infer<Validatable>,
// ) : Readonly<Static<Allow, Expectation, Allowed, Expected, Validatable>>
//
// export default function CallbackFunctionParameters<
//     Allow = unknown,
//     Expectation extends Allow = Allow,
//     Allowed extends boolean = boolean,
//     Expected extends boolean = boolean,
//     Validatable extends ValidatableType<Allow> = ValidatableType<Allow>,
//     Arguments extends unknown[] = unknown[],
// >(
//     value : Allow,
//     validation : (value:Allow, ...extra: Arguments)=>boolean,
//     message : (value:Allow, message: boolean, ...extra: Arguments)=> Infer<Validatable>,
//     argument : Arguments,
// ) : Readonly<Static<Allow, Expectation, Allowed, Expected, Validatable>>
//
export default function CallbackFunctionParameters(value, validation, 
// message : (value:Allow, valid: Allowed|Expected, ...extra: Arguments)=> Message,
message, argument) {
    // return {
    //     value,
    //     message : message(value, true, ...argument ),
    //     valid : true
    // } as Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, Message>>
    return new CallbackClassParameters(value, validation, message, argument);
}
//# sourceMappingURL=callback-function-parameters.js.map