import * as PIXI from "pixi.js";
if(!(<any>window).PIXI){
    (<any>window).PIXI =  PIXI;
}

import { applyContainerPolyfill } from "./containerPolyfill";
import { applyDisplayObjectPolyfill } from "./displayObjectPolyfill";

export { YogaLayout } from "./YogaLayout";
export { YogaLayoutConfig } from "./YogaLayoutConfig";
export * from "./YogaContants";

export function initializeYogaLayout() {
    applyDisplayObjectPolyfill();
    applyContainerPolyfill();
}
