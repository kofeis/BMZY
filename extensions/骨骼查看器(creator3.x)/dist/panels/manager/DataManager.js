"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataManager = void 0;
class DataManager {
    constructor() {
        this.isVersion = 0;
        this.assets = null;
    }
    static get ins() {
        if (!this._ins) {
            this._ins = new DataManager();
        }
        return this._ins;
    }
    isVersionGreater(currentVersion) {
        const version = "3.8.0";
        const currentParts = currentVersion.split('.').map(Number);
        const targetParts = version.split('.').map(Number);
        let isUp = false;
        for (let i = 0; i < Math.max(currentParts.length, targetParts.length); i++) {
            const currentPart = currentParts[i] || 0;
            const targetPart = targetParts[i] || 0;
            if (currentPart == targetPart)
                continue;
            if (currentPart > targetPart)
                return 6;
            if (currentPart < targetPart)
                return 8;
        }
        return 6;
    }
    reset() {
        this.assets = null;
    }
}
exports.DataManager = DataManager;
