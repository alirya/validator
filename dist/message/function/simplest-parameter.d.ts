import SimpleReturn from "../../value/simple";
import Dynamic from "../../value/dynamic";
import Simple from "./simple-parameter";
export declare type SimplestParameter<Allow = unknown, Expectation extends Allow = Allow, MessageType = unknown, Validatable extends SimpleReturn<Allow, Allow, Expectation, Readonly<Dynamic<Allow>>> = SimpleReturn<Allow, Allow, Expectation, Readonly<Dynamic<Allow>>>> = Simple<Allow, Allow, Expectation, MessageType, Validatable>;
export default SimplestParameter;
