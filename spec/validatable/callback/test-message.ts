import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";


export function TestMessageParameter (value : unknown, valid : boolean) : string {
    return 'type:' + typeof value + ', valid:' + (valid ? 'true' : 'false')
}

export function TestMessageObject (value : Validatable & Value) : string {
    return 'type:' + typeof value.value + ', valid:' + (value.valid ? 'true' : 'false')
}
