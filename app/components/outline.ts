// outline.ts
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass";

let outlinePass: OutlinePass | null = null;

export const setOutlinePass = (pass: OutlinePass) => {
  outlinePass = pass;
};

export const getOutlinePass = () => outlinePass;
