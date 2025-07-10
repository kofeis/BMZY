"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unload = exports.load = exports.methods = exports.PACKAGE_NAME = void 0;
const package_json_1 = __importDefault(require("../../package.json"));
const OpenerManager_1 = require("./manager/OpenerManager");
exports.PACKAGE_NAME = package_json_1.default.name;
exports.methods = {
    openPanel() {
        Editor.Panel.open(package_json_1.default.name);
    },
    onReadyEvent() {
        OpenerManager_1.OpenerManager.ins.checkEditorCurSelection();
    },
    onSelectionActivated(type, uuid) {
        if (type && uuid && uuid.length) {
            OpenerManager_1.OpenerManager.ins.identifySelection(type, uuid);
        }
        else {
            OpenerManager_1.OpenerManager.ins.updateView(null);
        }
    }
};
function load() {
}
exports.load = load;
function unload() { }
exports.unload = unload;
