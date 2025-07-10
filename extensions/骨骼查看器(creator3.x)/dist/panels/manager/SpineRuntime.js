"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpineRuntime = void 0;
class Runtime {
    constructor() {
        this.cache = {};
        this.onUpdateView = null;
    }
    get(version) {
        const cache = this.cache;
        if (cache[version] == null) {
            const libPath = `../../../lib/spine-runtimes/${version}/spine-webgl`;
            try {
                cache[version] = require(libPath);
            }
            catch (error) {
                console.log('spine版本未支持 :>> ', version);
                return null;
            }
            cache[version].version = version;
        }
        return cache[version];
    }
    hexToRGB(hex) {
        const regExp = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        if (!regExp.test(hex)) {
            return { r: 0, g: 0, b: 0 };
        }
        if (hex.length === 4) {
            const r = hex.slice(1, 2), g = hex.slice(2, 3), b = hex.slice(3, 4);
            hex = `#${r}${r}${g}${g}${b}${b}`;
        }
        const rgb = {
            r: parseInt(`0x${hex.slice(1, 3)}`),
            g: parseInt(`0x${hex.slice(3, 5)}`),
            b: parseInt(`0x${hex.slice(5, 7)}`),
        };
        return rgb;
    }
}
exports.SpineRuntime = new Runtime();
