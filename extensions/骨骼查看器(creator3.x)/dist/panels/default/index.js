"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const vue_1 = require("vue");
const app_1 = require("./app");
const DataManager_1 = require("../manager/DataManager");
const SpineRuntime_1 = require("../manager/SpineRuntime");
const panelDataMap = new WeakMap();
module.exports = Editor.Panel.define({
    listeners: {
        show() { },
        hide() { },
    },
    template: (0, fs_extra_1.readFileSync)((0, path_1.join)(__dirname, '../../../static/template/default/index.html'), 'utf-8'),
    style: (0, fs_extra_1.readFileSync)((0, path_1.join)(__dirname, '../../../static/style/default/index.css'), 'utf-8'),
    $: {
        app: '#app'
    },
    methods: {
        updateView(assets) {
            if (DataManager_1.DataManager.ins.assets) {
                DataManager_1.DataManager.ins.reset();
            }
            if (!assets)
                return;
            DataManager_1.DataManager.ins.assets = assets;
            SpineRuntime_1.SpineRuntime.onUpdateView && SpineRuntime_1.SpineRuntime.onUpdateView(assets);
        },
    },
    ready() {
        if (this.$.app) {
            DataManager_1.DataManager.ins.isVersion = DataManager_1.DataManager.ins.isVersionGreater(Editor.App.version);
            const app = (0, vue_1.createApp)({});
            app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('ui-');
            app.component('MyCounter', app_1.component);
            app.mount(this.$.app);
            panelDataMap.set(this, app);
        }
    },
    beforeClose() { },
    close() {
        const app = panelDataMap.get(this);
        if (app) {
            app.unmount();
        }
    },
});
