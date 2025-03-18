//import "ts-node/register";
import { register } from "node:module";
import { pathToFileURL } from "node:url";

// custom loader to avoid experimental "--loader"
register("ts-node/esm", pathToFileURL("./"))


//import "./app.ts"  



