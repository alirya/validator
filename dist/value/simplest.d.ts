import Dynamic from "./dynamic";
import Simple from "./simple";
declare type Simplest<Allow = unknown, Expectation extends Allow = Allow, Validatable extends Dynamic<Allow> = Dynamic<Allow>> = Simple<Allow, Allow, Expectation, Validatable>;
export default Simplest;
