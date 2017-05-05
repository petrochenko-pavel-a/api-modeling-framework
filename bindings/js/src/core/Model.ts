/**
 * Created by antoniogarrote on 05/05/2017.
 */

import {Clojure} from "../Clojure";

/**
 * Base class for all AMF parsed models, provides methods to inspect and manipulate the model
 */
export abstract class Model {

    /**
     * Builds the model from the inner Clojure data structure generated by the AMF library
     * @param rawModel
     */
    constructor(protected rawModel: any) {
        if (rawModel instanceof Error) {
            throw rawModel;
        }
    }

    /**
     * Returns the raw Clojure data structure for this instance data
     * @return
     */
    public abstract clojureModel(): any;

    /**
     * Returns the raw Clojure data as a JSON friendly data structure
     * @return
     */
    public toJSON(): any {
        return Clojure.cljsToJs(this.clojureModel());
    }
}