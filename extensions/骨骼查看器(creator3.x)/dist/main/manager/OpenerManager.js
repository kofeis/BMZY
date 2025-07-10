"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenerManager = void 0;
const fs_1 = require("fs");
const __1 = require("..");
const path_1 = require("path");
class OpenerManager {
    constructor() { }
    static get ins() {
        if (!this._ins) {
            this._ins = new OpenerManager();
        }
        return this._ins;
    }
    checkEditorCurSelection() {
        const type = Editor.Selection.getLastSelectedType();
        const id = Editor.Selection.getSelected(type)[0];
        if (type && id) {
            this.identifySelection(type, [id]);
        }
        else {
            this.updateView(null);
        }
    }
    async identifySelection(type, uuids) {
        if (type === 'asset') {
            this.identifyByUuids(uuids);
        }
        else if (type === 'node') {
            this.querySkeleton(uuids);
        }
        else {
            this.updateView(null);
        }
    }
    async querySkeleton(uuids) {
        const node = await Editor.Message.request("scene", "query-node", uuids[0]);
        let component = this.getComponentByType(node, "sp.Skeleton");
        if (!component)
            return;
        let value_uuid = (component === null || component === void 0 ? void 0 : component.value).skeletonData.value.uuid;
        let query_path = await Editor.Message.request("asset-db", "query-path", value_uuid);
        let assets = this.collectAssets(value_uuid, query_path);
        this.updateView(assets);
    }
    getComponentByType(node, type) {
        if (node && node.__comps__) {
            for (const component of node.__comps__) {
                if (component.type === type) {
                    return component;
                }
            }
        }
        return null;
    }
    updateView(assets) {
        Editor.Message.send(__1.PACKAGE_NAME, "update-view", assets);
    }
    async identifyByUuids(uuids) {
        let query_path = await Editor.Message.request("asset-db", "query-path", uuids[0]);
        let assets = this.collectAssets(uuids[0], query_path);
        this.updateView(assets);
    }
    getRelatedFile(filePath, relatedExt) {
        const dirPath = (0, path_1.join)((0, path_1.dirname)(filePath), path_1.sep), filebasename = (0, path_1.basename)(filePath, (0, path_1.extname)(filePath)).replace(/(-pro|-ess|-pma)/, ''), basePath = (0, path_1.join)(dirPath, filebasename), testList = [
            `${basePath}.${relatedExt}`,
            `${basePath}-pma.${relatedExt}`,
            `${basePath}-pro.${relatedExt}`,
            `${basePath}-ess.${relatedExt}`
        ];
        for (let i = 0; i < testList.length; i++) {
            if ((0, fs_1.existsSync)(testList[i])) {
                return testList[i];
            }
        }
        return null;
    }
    collectAssets(uuid, jsonPath) {
        if (!jsonPath || !uuid) {
            return null;
        }
        if (!(jsonPath.endsWith("json") || jsonPath.endsWith("skel"))) {
            return null;
        }
        let texturePath = this.getRelatedFile(jsonPath, "png");
        if (!texturePath) {
            console.log('没有找到纹理资源 :>> ', jsonPath);
            return null;
        }
        let atlasPath = this.getRelatedFile(jsonPath, 'atlas');
        if (!atlasPath) {
            atlasPath = this.getRelatedFile(jsonPath, 'txt');
        }
        if (!atlasPath) {
            atlasPath = this.getRelatedFile(jsonPath, 'atlas.txt');
        }
        if (!atlasPath) {
            console.log('没有找到图集资源 :>> ', jsonPath);
            return null;
        }
        const spineType = (0, path_1.extname)(jsonPath);
        const assets = {
            uuid: uuid,
            json: (spineType === '.json') ? jsonPath : undefined,
            skel: (spineType === '.skel') ? jsonPath : undefined,
            atlas: atlasPath,
            png: texturePath
        };
        return assets;
    }
}
exports.OpenerManager = OpenerManager;
