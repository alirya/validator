import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";


export default function TestMessage (value : Validatable & Value) : string {
    return 'type:' + typeof value.value + ', valid:' + (value.valid ? 'true' : 'false')
}
