import Validatable from '@axiona/validatable/validatable.js';
import Value from '@axiona/value/value.js';


export function TestMessageParameter (value : unknown, valid : boolean) : string {
    return 'type:' + typeof value + ', valid:' + (valid ? 'true' : 'false');
}

export function TestMessageObject (value : Validatable & Value) : string {
    return 'type:' + typeof value.value + ', valid:' + (value.valid ? 'true' : 'false');
}
