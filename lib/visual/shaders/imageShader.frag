/**
 * Image shader.
 *
 * @author Nikita Agafonov
 * @copyright (c) 2020-2022 Open Science Tools Ltd. (https://opensciencetools.org)
 * @license Distributed under the terms of the MIT License
 * @description Renders passed in image with applied effects.
 * @usedby GratingStim.js
 */

#version 300 es
precision mediump float;

in vec2 vUvs;
out vec4 shaderOut;

#define M_PI 3.14159265358979
uniform sampler2D uTex;
uniform float uFreq;
uniform float uPhase;
uniform vec3 uColor;
uniform float uAlpha;

void main() {
    vec2 uv = vUvs;
    // converting first to [-1, 1] space to get the proper color functionality
    // then back to [0, 1]
    vec4 s = texture(uTex, vec2(uv.x * uFreq + uPhase, uv.y));
    s.xyz = s.xyz * 2. - 1.;
    shaderOut = vec4(s.xyz * uColor * .5 + .5, s.a) * uAlpha;
}
