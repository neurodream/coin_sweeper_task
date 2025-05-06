/**
 * Sine wave.
 * https://en.wikipedia.org/wiki/Sine_wave
 *
 * @author Nikita Agafonov
 * @copyright (c) 2020-2022 Open Science Tools Ltd. (https://opensciencetools.org)
 * @license Distributed under the terms of the MIT License
 * @description Creates 2d sine wave image as if 1d sine graph was extended across Z axis and observed from above.
 * @usedby GratingStim.js
 */

#version 300 es
precision mediump float;

in vec2 vUvs;
out vec4 shaderOut;

#define M_PI 3.14159265358979
uniform float uFreq;
uniform float uPhase;
uniform vec3 uColor;
uniform float uAlpha;

void main() {
    vec2 uv = vUvs - .25;
    float s = sin((uFreq * uv.x + uPhase) * 2. * M_PI);
    // it's important to convert to [0, 1] while multiplying to uColor, not before, to preserve desired coloring functionality
    shaderOut = vec4(vec3(s) * uColor * .5 + .5, 1.0) * uAlpha;
}
