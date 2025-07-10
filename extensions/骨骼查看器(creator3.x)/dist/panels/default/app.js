"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.component = void 0;
const fs_1 = require("fs");
const path_1 = __importStar(require("path"));
const SpineRuntime_1 = require("../manager/SpineRuntime");
const DataManager_1 = require("../manager/DataManager");
let canvas = null, gl = null, shader = null, batcher = null, mvp = null, skeletonRenderer = null, spine;
let debugRenderer = null, debugShader = null, shapeRenderer = null;
let skeleton = null, bounds = null;
let lastFrameTime = null;
let isDragging = false, clickOffset = [0, 0];
let layout = null, resizeObserver = null, resizeHandler = undefined;
exports.component = {
    template: (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '../../../static/template/vue/counter.html'), 'utf-8'),
    data() {
        return {
            assets: {
                json: null,
                atlas: null,
                png: null,
            },
            viewScale: 1.0,
            skin: '',
            animation: '',
            timeScale: 1,
            loop: true,
            premultipliedAlpha: false,
            drawBones: false,
            drawBoundingBoxes: false,
            drawMeshTriangles: false,
            drawPaths: false,
            version: 'unknown',
            canvasColor: '#4c4c4c',
            clearColor: [0.3, 0.3, 0.3],
            assetManager: null,
            skeletonData: null,
            animationState: null,
            dragOffset: [0, 0],
        };
    },
    watch: {
        skin(value) {
            this.setSkin(value);
        },
        animation(value) {
            this.playAnimation(value);
        },
        timeScale(value) {
            value = parseFloat(value) || 0;
            this.setTimeScale(value);
        },
        loop(value) {
            this.playAnimation(this.animation);
        },
        canvasColor(value) {
            canvas.style.backgroundColor = value;
            const { r, g, b } = SpineRuntime_1.SpineRuntime.hexToRGB(value);
            this.clearColor = [r / 255, g / 255, b / 255];
            if (gl) {
                gl.clearColor(r / 255, g / 255, b / 255, 1);
                gl.clear(gl.COLOR_BUFFER_BIT);
            }
        },
    },
    computed: {
        skins() {
            if (!this.skeletonData || !this.skeletonData.skins) {
                return [];
            }
            return this.skeletonData.skins.map((v) => v.name);
        },
        animations() {
            if (!this.skeletonData || !this.skeletonData.animations) {
                return [];
            }
            return this.skeletonData.animations.map((v) => v.name);
        },
        debug() {
            return (this.drawBones ||
                this.drawBoundingBoxes ||
                this.drawMeshTriangles ||
                this.drawPaths);
        },
        duration() {
            if (!this.animationState) {
                return 0;
            }
            return this.animationState.getCurrent(0).animation.duration;
        },
        assetsInfo() {
            if (!this.assetManager) {
                return `💡 没有资源`;
            }
            ;
            let skeletonPath = '', texturePath = '', atlasPath = '';
            for (const asset in this.assetManager.assets) {
                switch (path_1.default.extname(asset)) {
                    case '.json':
                    case '.skel': {
                        skeletonPath = asset;
                        break;
                    }
                    case '.png': {
                        texturePath = asset;
                        break;
                    }
                    case '.atlas': {
                        atlasPath = asset;
                        break;
                    }
                }
            }
            return `💀 [Skeleton]\n· ${skeletonPath}\n\n🖼 [Texture]\n· ${texturePath}\n\n🗺 [Atlas]\n· ${atlasPath}`;
        },
        selectAssets() {
            if (!this.assets || !this.assets.uuid) {
                return `💡 没有资源`;
            }
            return `💡 uuid:${this.assets.uuid}\n选中资源`;
        },
        offset() {
            return `(${this.dragOffset[0]}, ${-this.dragOffset[1]})`;
        },
    },
    mounted() {
        SpineRuntime_1.SpineRuntime.onUpdateView = (assets) => {
            if (this.assets) {
                this.reset();
            }
            if (!assets)
                return;
            this.assets = assets;
            const result = this.getRuntime();
            if (!result)
                return;
            this.processAssetPaths();
            this.initRuntime();
            this.loadAssets();
        };
        canvas = this.$refs.canvas;
        layout = this.$refs.layout;
        canvas.addEventListener('mousewheel', this.onCanvasMouseWheel);
        canvas.addEventListener('mousedown', this.onCanvasMouseDown);
        canvas.addEventListener('mousemove', this.onCanvasMouseMove);
        canvas.addEventListener('mouseup', this.onCanvasMouseUp);
        canvas.addEventListener('mouseleave', this.onCanvasMouseLeave);
        this.$nextTick(() => {
        });
        this.onLayoutResize();
        setTimeout(() => {
            if (window.ResizeObserver) {
                resizeObserver = new ResizeObserver(entries => {
                    this.onLayoutResize();
                });
                resizeObserver.observe(layout);
            }
            else {
                let lastWidth = layout.clientWidth, lastHeight = layout.clientHeight;
                resizeHandler = setInterval(() => {
                    if (layout.clientWidth !== lastWidth ||
                        layout.clientHeight !== lastHeight) {
                        this.onLayoutResize();
                        lastWidth = layout.clientWidth;
                        lastHeight = layout.clientHeight;
                    }
                }, 500);
            }
        }, 500);
    },
    beforeUnmount() {
        if (resizeObserver) {
            resizeObserver.disconnect();
            resizeObserver = null;
        }
        else {
            clearInterval(resizeHandler);
            resizeHandler = undefined;
        }
    },
    methods: {
        reset() {
            this.assets = null;
            this.viewScale = 1;
            this.skin = '';
            this.animation = '';
            this.timeScale = 1;
            this.loop = true;
            this.premultipliedAlpha = false;
            this.drawBones = false;
            this.drawBoundingBoxes = false;
            this.drawMeshTriangles = false;
            this.drawPaths = false;
            this.version = 'unknown';
            this.canvasColor = '#4c4c4c';
            skeleton = null;
            bounds = null;
            this.skeletonData = null;
            this.animationState = null;
            gl && gl.clear(gl.COLOR_BUFFER_BIT);
            shader = null;
            batcher = null;
            mvp = null;
            skeletonRenderer = null;
            this.assetManager = null;
            debugRenderer = null;
            debugShader = null;
            shapeRenderer = null;
            lastFrameTime = null;
            isDragging = false;
            clickOffset = [0, 0];
            this.dragOffset = [0, 0];
        },
        onInfoBtnClick() {
            if (!this.assets || !this.assets.uuid) {
                return;
            }
            const uuid = this.assets.uuid;
            Editor.Message.broadcast("ui-kit:touch-asset", uuid);
        },
        onSelectBtnClick() {
            if (!this.assets || !this.assets.uuid) {
                return;
            }
            console.log('未实现 :>> ');
        },
        onResetBtnClick() {
            this.reset();
        },
        onRepositionBtnClick() {
            isDragging = false;
            clickOffset = [0, 0];
            this.dragOffset = [0, 0];
        },
        processAssetPaths() {
            const assets = this.assets, { dir, json, skel, png, atlas } = assets;
            if (!dir) {
                assets.dir = (0, path_1.dirname)(json || skel);
            }
            if (!assets.dir.endsWith(path_1.sep)) {
                assets.dir += path_1.sep;
            }
            if (json) {
                assets.json = (0, path_1.basename)(json);
            }
            else if (skel) {
                assets.skel = (0, path_1.basename)(skel);
            }
            assets.atlas = (0, path_1.basename)(atlas);
            assets.png = (0, path_1.basename)(png);
        },
        resizeView() {
            const { clientWidth, clientHeight } = canvas;
            let reHeight;
            reHeight = DataManager_1.DataManager.ins.isVersion;
            if (canvas.width !== clientWidth || canvas.height !== clientHeight) {
                canvas.width = clientWidth;
                canvas.height = clientHeight - reHeight;
            }
            const canvasWidth = canvas.width, canvasHeight = canvas.height;
            const centerX = (bounds.offset.x + (bounds.size.x / 2)) || 0, centerY = (bounds.offset.y + (bounds.size.y / 2)) || 0;
            const ratioX = bounds.size.x / canvasWidth, ratioY = bounds.size.y / canvasHeight;
            let scale = Math.max(ratioX, ratioY) * 1.2;
            if (scale < 1)
                scale = 1;
            scale /= this.viewScale;
            const width = canvasWidth * scale, height = canvasHeight * scale;
            const x = (centerX - (width / 2)) - (this.dragOffset[0] * scale), y = (centerY - (height / 2)) + (this.dragOffset[1] * scale);
            mvp.ortho2d(x, y, width, height);
            gl.viewport(0, 0, canvasWidth, canvasHeight);
        },
        getRuntime() {
            let version = this.getAssetSpineVersion(this.assets.json || this.assets.skel);
            if (!version) {
                console.warn('未识别该spine版本!');
                version = "未适配";
            }
            version = version.split('.').slice(0, 2).map((v) => parseInt(v)).join('.');
            const runtime = SpineRuntime_1.SpineRuntime.get(version);
            if (!runtime) {
                return false;
            }
            spine = runtime;
            this.version = spine.version;
            return true;
        },
        getAssetSpineVersion(path) {
            if (!(0, fs_1.existsSync)(path)) {
                return null;
            }
            const ext = (0, path_1.extname)(path);
            if (ext === '.json') {
                const data = JSON.parse((0, fs_1.readFileSync)(path, 'utf-8'));
                if (data.skeleton) {
                    return data.skeleton.spine;
                }
            }
            else if (ext === ".skel") {
                return '3.8';
            }
            return null;
        },
        initRuntime() {
            if (!canvas) {
                canvas = this.$refs.canvas;
            }
            if (!gl) {
                const config = { alpha: false };
                gl = canvas.getContext("webgl", config);
                if (!gl) {
                    return;
                }
                const color = this.clearColor;
                gl.clearColor(color[0], color[1], color[2], 1);
            }
            shader = spine.webgl.Shader.newTwoColoredTextured(gl);
            batcher = new spine.webgl.PolygonBatcher(gl);
            mvp = new spine.webgl.Matrix4();
            mvp.ortho2d(0, 0, canvas.width - 1, canvas.height - 1);
            skeletonRenderer = new spine.webgl.SkeletonRenderer(gl);
            debugRenderer = new spine.webgl.SkeletonDebugRenderer(gl);
            debugShader = spine.webgl.Shader.newColored(gl);
            shapeRenderer = new spine.webgl.ShapeRenderer(gl);
            this.assetManager = new spine.webgl.AssetManager(gl);
        },
        loadAssets() {
            const assetManager = this.assetManager;
            if (!assetManager) {
                return;
            }
            const assets = this.assets;
            if (assets.dir) {
                assetManager.pathPrefix = assets.dir;
            }
            if (assets.json) {
                assetManager.loadText(assets.json);
            }
            else if (assets.skel) {
                assetManager.loadBinary(assets.skel);
            }
            else {
                return;
            }
            if (assetManager.loadTextureAtlas) {
                assetManager.loadTextureAtlas(assets.atlas);
            }
            else {
                assetManager.loadText(assets.atlas);
                assetManager.loadTexture(assets.png);
            }
            if ((0, path_1.basename)(assets.png).includes('pma') ||
                (0, path_1.basename)(assets.atlas).includes('pma')) {
                this.premultipliedAlpha = true;
            }
            requestAnimationFrame(this.loading);
        },
        loading() {
            if (!this.assetManager) {
                return;
            }
            if (this.assetManager.isLoadingComplete()) {
                const result = this.loadSkeleton();
                if (!result) {
                    this.reset();
                    return;
                }
                if (this.skins && this.skins[0]) {
                    this.setSkin(this.skins[0]);
                }
                if (this.animations && this.animations[0]) {
                    this.playAnimation(this.animations[0]);
                }
                lastFrameTime = Date.now() / 1000;
                requestAnimationFrame(this.render);
            }
            else {
                requestAnimationFrame(this.loading);
            }
        },
        loadSkeleton() {
            const assetManager = this.assetManager, assets = this.assets;
            let atlas = assetManager.get(assets.atlas);
            if (spine.version === '3.5') {
                atlas = new spine.TextureAtlas(atlas);
            }
            const atlasLoader = new spine.AtlasAttachmentLoader(atlas);
            try {
                if (assets.json) {
                    const skeletonJson = new spine.SkeletonJson(atlasLoader);
                    this.skeletonData = skeletonJson.readSkeletonData(assetManager.get(assets.json));
                }
                else if (assets.skel) {
                    const skeletonBinary = new spine.SkeletonBinary(atlasLoader);
                    this.skeletonData = skeletonBinary.readSkeletonData(assetManager.get(assets.skel));
                }
            }
            catch (error) {
                console.error(error);
                return false;
            }
            skeleton = new spine.Skeleton(this.skeletonData);
            bounds = this.calculateBounds();
            const animationStateData = new spine.AnimationStateData(skeleton.data);
            this.animationState = new spine.AnimationState(animationStateData);
            return true;
        },
        setSkin(name) {
            if (!skeleton) {
                return;
            }
            this.skin = name;
            skeleton.setSkinByName(name);
            skeleton.setSlotsToSetupPose();
        },
        playAnimation(name) {
            if (!skeleton) {
                return;
            }
            this.animation = name;
            skeleton.setToSetupPose();
            this.animationState.setAnimation(0, name, this.loop);
        },
        setTimeScale(value) {
            if (!skeleton) {
                return;
            }
            this.animationState.timeScale = value;
        },
        calculateBounds() {
            skeleton.setToSetupPose();
            skeleton.updateWorldTransform();
            const offset = new spine.Vector2(), size = new spine.Vector2();
            skeleton.getBounds(offset, size, []);
            return { offset, size };
        },
        render() {
            if (!skeleton) {
                return;
            }
            const now = Date.now() / 1000, delta = now - lastFrameTime;
            lastFrameTime = now;
            this.resizeView();
            gl.clear(gl.COLOR_BUFFER_BIT);
            this.animationState.update(delta);
            this.animationState.apply(skeleton);
            skeleton.updateWorldTransform();
            shader.bind();
            shader.setUniformi(spine.webgl.Shader.SAMPLER, 0);
            shader.setUniform4x4f(spine.webgl.Shader.MVP_MATRIX, mvp.values);
            batcher.begin(shader);
            skeletonRenderer.premultipliedAlpha = this.premultipliedAlpha;
            skeletonRenderer.draw(batcher, skeleton);
            batcher.end();
            shader.unbind();
            if (this.debug) {
                debugShader.bind();
                debugShader.setUniform4x4f(spine.webgl.Shader.MVP_MATRIX, mvp.values);
                debugRenderer.premultipliedAlpha = this.premultipliedAlpha;
                debugRenderer.drawBones = this.drawBones;
                debugRenderer.drawBoundingBoxes = this.drawBoundingBoxes;
                debugRenderer.drawRegionAttachments = this.drawBoundingBoxes;
                debugRenderer.drawMeshHull = this.drawMeshTriangles;
                debugRenderer.drawMeshTriangles = this.drawMeshTriangles;
                debugRenderer.drawPaths = this.drawPaths;
                debugRenderer.drawSkeletonXY = this.drawBones;
                shapeRenderer.begin(debugShader);
                debugRenderer.draw(shapeRenderer, skeleton);
                shapeRenderer.end();
                debugShader.unbind();
            }
            requestAnimationFrame(this.render);
        },
        onLayoutResize() {
            const layoutStyle = layout.style, propertiesStyle = this.$refs.properties.style;
            if (layout.clientWidth >= 800 || layout.clientHeight < 330) {
                if (layout.clientWidth >= 350) {
                    layoutStyle.flexDirection = 'row';
                    propertiesStyle.width = '265px';
                    propertiesStyle.marginTop = '0';
                    propertiesStyle.marginLeft = '5px';
                    propertiesStyle.display = 'flex';
                }
                else {
                    propertiesStyle.display = 'none';
                }
            }
            else {
                layoutStyle.flexDirection = 'column';
                propertiesStyle.width = '100%';
                propertiesStyle.marginTop = '5px';
                propertiesStyle.marginLeft = '0';
                propertiesStyle.display = 'flex';
            }
        },
        onCanvasMouseWheel(event) {
            if (!this.assets) {
                return;
            }
            let scale = this.viewScale;
            const step = Math.abs(scale) >= 1 ? 0.1 : 0.05;
            if (event.wheelDelta > 0) {
                scale += step;
            }
            else {
                scale -= step;
            }
            scale = Math.round(scale * 100) / 100;
            this.viewScale = scale;
        },
        onCanvasMouseDown(event) {
            if (!this.assets) {
                return;
            }
            isDragging = true;
            const x = event.offsetX - this.dragOffset[0], y = event.offsetY - this.dragOffset[1];
            clickOffset = [x, y];
        },
        onCanvasMouseMove(event) {
            if (!isDragging) {
                return;
            }
            const x = event.offsetX - clickOffset[0], y = event.offsetY - clickOffset[1];
            this.dragOffset = [x, y];
        },
        onCanvasMouseUp(event) {
            isDragging = false;
            clickOffset = [0, 0];
        },
        onCanvasMouseLeave(event) {
            isDragging = false;
            clickOffset = [0, 0];
        },
    }
};
