// FisheyeEffect.tsx
import { Uniform } from "three";
import { Effect } from "postprocessing";

const fragmentShader = /* glsl */ `
uniform float strength;
uniform sampler2D tDiffuse;

// Required by postprocessing
void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  vec2 centeredUv = uv * 2.0 - 1.0;
  float r = length(centeredUv);
  float theta = atan(centeredUv.y, centeredUv.x);

  // Fisheye distortion
  r = pow(r, 1.0/ strength);
  vec2 distorted = r * vec2(cos(theta), sin(theta));
  distorted = distorted * 0.5 + 0.5;
  vec4 texColor = texture2D(tDiffuse, distorted);
  float edgeFade = smoothstep(1.0, 0.8, r); // fade near edges
  outputColor = vec4(texColor.rgb * edgeFade, texColor.a);
}
`;

export class FisheyeEffect extends Effect {
  constructor(strength = 0.75) {
    super("FisheyeEffect", fragmentShader, {
      uniforms: new Map([["strength", new Uniform(strength)]]),
    });
  }
}
