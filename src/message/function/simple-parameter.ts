import SimpleReturn from '../../value/simple';
import Dynamic from '../../value/validatable';
import ReplaceValue from '@alirya/value/value/replace';
import ReplaceValidatable from '@alirya/validatable/boolean/replace';

export default interface SimpleParameter<
    Allow = unknown,
    Expectation = unknown,
    MessageType = unknown,
    Validatable extends  SimpleReturn<Allow, Expectation, Readonly<Dynamic<Allow>>> =
        SimpleReturn<Allow, Expectation, Readonly<Dynamic<Allow>>>
>  {
    <Value extends Allow>(argument: ReplaceValidatable<ReplaceValue<Validatable, Value>, false>) : MessageType;
    <Value extends Expectation>(argument: ReplaceValidatable<ReplaceValue<Validatable, Value>, true>) : MessageType;
}

