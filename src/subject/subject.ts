import Validator from "../validator";
import Allow from "./allow";

type Expectation<Type> = Type extends Validator<infer Allow, infer Expectation> ? Allow|Expectation : never;

export default Expectation;
