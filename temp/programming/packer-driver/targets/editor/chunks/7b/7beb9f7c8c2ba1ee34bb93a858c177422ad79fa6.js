System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, v3, size, tween, Tween, find, assert, sp, UIOpacity, Color, UITransform, v2, MotionStreak, BaseLayer, audioManager, gameModel, msgcmd, constants, RecipeItem, utilTools, cocosUtil, designManager, Hexagon, UserData, _dec, _class, _crd, ccclass, property, GameLayer, createNumProbs, createColorNumProbs;

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../../framework/common/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../framework/manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameModel(extras) {
    _reporterNs.report("gameModel", "../model/GameModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgcmd(extras) {
    _reporterNs.report("msgcmd", "../data/MsgCmd", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecipeItem(extras) {
    _reporterNs.report("RecipeItem", "../item/RecipeItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../framework/utils/UtilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../framework/utils/CocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../framework/manager/DesignManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHexagon(extras) {
    _reporterNs.report("Hexagon", "../item/Hexagon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../model/UserData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      v3 = _cc.v3;
      size = _cc.size;
      tween = _cc.tween;
      Tween = _cc.Tween;
      find = _cc.find;
      assert = _cc.assert;
      sp = _cc.sp;
      UIOpacity = _cc.UIOpacity;
      Color = _cc.Color;
      UITransform = _cc.UITransform;
      v2 = _cc.v2;
      MotionStreak = _cc.MotionStreak;
    }, function (_unresolved_2) {
      BaseLayer = _unresolved_2.BaseLayer;
    }, function (_unresolved_3) {
      audioManager = _unresolved_3.audioManager;
    }, function (_unresolved_4) {
      gameModel = _unresolved_4.gameModel;
    }, function (_unresolved_5) {
      msgcmd = _unresolved_5.msgcmd;
    }, function (_unresolved_6) {
      constants = _unresolved_6.constants;
    }, function (_unresolved_7) {
      RecipeItem = _unresolved_7.RecipeItem;
    }, function (_unresolved_8) {
      utilTools = _unresolved_8.utilTools;
    }, function (_unresolved_9) {
      cocosUtil = _unresolved_9.cocosUtil;
    }, function (_unresolved_10) {
      designManager = _unresolved_10.designManager;
    }, function (_unresolved_11) {
      Hexagon = _unresolved_11.Hexagon;
    }, function (_unresolved_12) {
      UserData = _unresolved_12.UserData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7500Gf2ZFJ1YxZHuQuyXFb", "GameLayer", undefined);

      __checkObsolete__(['_decorator', 'Sprite', 'Node', 'v3', 'size', 'EventTouch', 'tween', 'Tween', 'Vec3', 'find', 'assert', 'sp', 'UIOpacity', 'Texture2D', 'Color', 'UITransform', 'SpriteFrame', 'v2', 'MotionStreak']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameLayer", GameLayer = (_dec = ccclass('GameLayer'), _dec(_class = class GameLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor(...args) {
          super(...args);
          this._choosePanel = void 0;
          this._skillBtns = void 0;
          this._foodInfoNode = void 0;
          this._mapArea = void 0;
          this._mapStack = void 0;
          // 每个六边形之间的间隔
          this._spacing = 12;
          // private _spritePool: Node;
          // 六边形翻转中间点
          this._mergeTemp = void 0;
          this._circle = void 0;
          // private _progressNode: Node;
          // 3个待选堆的x坐标
          this._stackPilePosXArr = [-215, 0, 215];
          // 消除特效
          this._eliminateEffect = void 0;
          // 得分特效
          this._scoringEffect = void 0;
          // 消除道具特效
          this._clearEffect = void 0;
          this._mergeEffect = void 0;
          this._flyEffect = void 0;
          // 广告解锁
          this._videoUnlockArea = void 0;
          // 移动Pile时选中的格子
          this._selectedArea = void 0;
          // 已经消除的数量
          this._alreadyClearTotal = 0;
          // 目标消除数量
          this._targetClearTotal = 0;
          // // 进度更新动画
          // private _alreadyRenderClearTotal = 0;
          // private _renderProgressFunc: Function;
          // 需要再次检查的格子列表
          this._doubleCheckAreaArr = [];
          // 等待消除的格子列表
          this._waitClearAreaArr = [];
          // 根据当前进度[0-100]确定一个下标，用于随机生成六边形堆
          this._progressCoefficientArr = [20, 40, 60, 80, 100];
          // private _colorPoolIndex: number = 0;
          this._movingPile = void 0;
          // 使用移动道具记录待切换的格子
          this._switchArea = void 0;
          this._recipeItemLayer = void 0;

          /**
           * 
           * @param time 时间
           * @param startPos 开始位置
           * @param ctlPos 控制点
           * @param endPos 结束为止
           * @returns 
           */
          this.calculateBezierPosition = function (t, startPos, ctlPos, endPos) {
            let x = (1 - t) * (1 - t) * startPos.x + 2 * t * (1 - t) * ctlPos.x + t * t * endPos.x;
            let y = (1 - t) * (1 - t) * startPos.y + 2 * t * (1 - t) * ctlPos.y + t * t * endPos.y;
            return v3(x, y, 0);
          };
        }

        onLoad() {
          super.onLoad();
          this._choosePanel = this.getNodeByPath("UI/Choose");
          this._skillBtns = this.getNodeByPath("UI/SkillBtns");
          this._foodInfoNode = this.getNodeByPath("UI/ShowFoodInfo"); // let mapSystem = find("Game", this.node).addComponent(MapSystem);

          (_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
            error: Error()
          }), gameModel) : gameModel).setCompoments(this);
          this._mapArea = this.getNodeByPath("Game/Area");
          this._mapStack = this.getNodeByPath("Game/Stack"); // this._spritePool = this.getNodeByPath("Pool");

          this._mergeTemp = this.getNodeByPath("Game/Temp");
          this._circle = this.getNodeByPath("Game/Circle"); // this._progressNode = this.getNodeByPath("Progress");

          this._eliminateEffect = this.getNodeByPath("Game/EliminateEffect");
          this._mergeEffect = this.getNodeByPath("Game/MergeEffect");
          this._scoringEffect = this.getNodeByPath("Game/ScoringEffect");
          this._clearEffect = this.getNodeByPath("Game/ClearEffect");
          this._flyEffect = this.getNodeByPath("Game/FlyEffect");
          this._recipeItemLayer = this.getNodeByPath("Game/Top/Food/RecipeGrid");
        }

        onEnable() {
          super.onEnable();
          this.addEventArr([(_crd && msgcmd === void 0 ? (_reportPossibleCrUseOfmsgcmd({
            error: Error()
          }), msgcmd) : msgcmd).mapLeave, (_crd && msgcmd === void 0 ? (_reportPossibleCrUseOfmsgcmd({
            error: Error()
          }), msgcmd) : msgcmd).saveDataBefore]);
        }

        initUI() {
          this.showFoodInfo();
          this.refreshRecipeFood();
          this.setItemLayer(this._recipeItemLayer, (_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
            error: Error()
          }), gameModel) : gameModel).mapRecipeItemArr, this.refreshRecipeItem.bind(this));
          this.refreshProgress();
          this.initLevel();
        } // 展示食物详情


        showFoodInfo() {
          let row = (_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
            error: Error()
          }), gameModel) : gameModel).mapFoodRow;
          this.setSpriteFrame2(this.getNodeByPath("UI/FoodHint/Icon"), row.icon);
          this.setString(this.getNodeByPath("UI/FoodHint/Name"), row.name);
          this.setString(this.getNodeByPath("UI/FoodHint/Info"), row.info);

          let pos = this._foodInfoNode.getPosition();

          pos.x = 750;

          this._foodInfoNode.setPosition(pos);

          this._foodInfoNode.active = true;
          let thisObj = this;
          tween(this._foodInfoNode).delay(0.5).to(0.3, {
            position: v3(0, 0, 0)
          }).delay(1).call(function () {
            thisObj._foodInfoNode.active = false;
          }).start();
        }

        popLayer(layerName, layerData, layerCb) {
          if (this.isShowingLayer(layerName)) {
            return;
          }

          this.openLayer(layerName, layerData, () => {
            if (layerCb) {
              layerCb();
            }
          });
        } // 消除


        onClearBtnClick() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).audioNames.btnClick);
          this.randomClearAreasByNum(3);
        } // 移动


        onMoveBtnClick() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).audioNames.btnClick);

          if (!this.checkCanMove()) {
            // TODO 暂不可用
            return;
          }

          this.showSelectPanel();
        }

        showSelectPanel() {
          let thisObj = this;
          this._choosePanel.active = true;
          this._skillBtns.active = false;
          this.makeMove();
          let closeBtn = find("CloseBtn", this._choosePanel);
          closeBtn.off(Node.EventType.TOUCH_END);
          closeBtn.on(Node.EventType.TOUCH_END, function (event) {
            (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).audioNames.btnClick);
            thisObj.hideSelectPannel();
          }, thisObj);
        }

        hideSelectPannel() {
          this._choosePanel.active = false;
          this._skillBtns.active = true;
          this.cancelMove();
        } // 重发


        onRefreshBtnClick() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).audioNames.btnClick);
          this.refreshStackPiles();
        }

        onSettingBtnClick() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).audioNames.btnClick);
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.SettingLayer, {
            isOpenFromMap: true
          });
        }

        mapLeaveEventCb(data) {
          this.closeLayer();
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.HomeLayer);
        }

        refreshRecipeItem(itemUI, data) {
          console.log("refreshRecipeItem", data);
          itemUI.getComponent(_crd && RecipeItem === void 0 ? (_reportPossibleCrUseOfRecipeItem({
            error: Error()
          }), RecipeItem) : RecipeItem).setView(data);
        } // 更新菜谱食物


        refreshRecipeFood() {
          console.log("refreshRecipeFood");
          this.setSpriteFrame2(find("Icon", this.node), (_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
            error: Error()
          }), gameModel) : gameModel).mapFoodRow.icon);
          this.setString(find("Name", this.node), (_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
            error: Error()
          }), gameModel) : gameModel).mapFoodRow.name);
        } // 更新消除进度


        refreshProgress() {
          let targetClearTotal = 0;
          let remainClearTotal = 0;
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this._recipeItemLayer.children, function (node, index) {
            let recipeItem = node.getComponent(_crd && RecipeItem === void 0 ? (_reportPossibleCrUseOfRecipeItem({
              error: Error()
            }), RecipeItem) : RecipeItem);
            targetClearTotal += recipeItem.targetClearNum;
            remainClearTotal += recipeItem.remainClearNum;
          });
          let precent = (targetClearTotal - remainClearTotal) / targetClearTotal * 100;
          this.setString(this.getNodeByPath("Progress"), parseInt(String(precent)) + "%");
        } // 计算剩余待消除食材数量


        getRemainRecipeItemsTotal() {
          let total = 0;
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this._recipeItemLayer.children, function (node, index) {
            let recipeItem = node.getComponent(_crd && RecipeItem === void 0 ? (_reportPossibleCrUseOfRecipeItem({
              error: Error()
            }), RecipeItem) : RecipeItem);
            total += recipeItem.remainClearNum;
            console.log("getRemainRecipeItemsTotal", node.name, recipeItem.remainClearNum, total);
          });
          return total;
        } // 数量很少，直接遍历查找


        findRecipeItemNodeById(id) {
          let recipeItemNode = null;
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this._recipeItemLayer.children, function (node, index) {
            let recipeItem = node.getComponent(_crd && RecipeItem === void 0 ? (_reportPossibleCrUseOfRecipeItem({
              error: Error()
            }), RecipeItem) : RecipeItem);

            if (recipeItem.recipeId == id) {
              recipeItemNode = node;
              return true;
            }
          });
          return recipeItemNode;
        } // 初始化关卡


        initLevel() {
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableNames.level, 1); // this._colorPoolIndex = Number(row.pool ? row.pool - 1 : 0);

          this._alreadyClearTotal = Number(row.already || 0);
          this._targetClearTotal = Number(row.point);
          this.fillMapArea(row);

          if (row.piles.length > 0) {
            this.initStackPiles(row.piles);
          } //this.updateProgress();

        } // 填充关卡地图


        fillMapArea(row) {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(row.map, (mapRow, index) => {
            let area = this._mapArea.getChildByName(String(mapRow.id));

            if (mapRow.disable) {
              area.active = false;
            } // 广告解锁


            if (mapRow.video) {
              let mask = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).instantiate(this._videoUnlockArea);
              mask.active = true;
              area.addChild(mask);
              area.setPosition(v3(0, 0));
              mask.on(Node.EventType.TOUCH_END, this.onVideoUnlockClick, this);
            }

            if (mapRow.c) {
              (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).forArr(mapRow.c, (id, index) => {
                let hexagon = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                  error: Error()
                }), cocosUtil) : cocosUtil).instantiate((_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
                  error: Error()
                }), gameModel) : gameModel).getHexagonPrefab(id));
                hexagon.setPosition(v3(0, area.children.length * this._spacing + 6));
                hexagon.name = String(id);
                area.addChild(hexagon);
                let recipeItemData = (_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
                  error: Error()
                }), gameModel) : gameModel).getRecipeItemById(id);
                hexagon.getComponent(_crd && Hexagon === void 0 ? (_reportPossibleCrUseOfHexagon({
                  error: Error()
                }), Hexagon) : Hexagon).setView(recipeItemData);
              });
            }
          });
        } // 进入关卡时，生成默认的六变形堆


        initStackPiles(piles) {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(piles, (val, index) => {
            let pile = this.createPile(val.c);

            this._mapStack.addChild(pile);

            pile.active = true;
            this.name = String(val.id);
            let pos = pile.getPosition();
            pos.x = this._stackPilePosXArr[val.id];
            pile.setPosition(pos); // 记录原始位置方便恢复

            pile.canTouch = true;
            pile.originalPos = pile.getPosition();
          });
        } // 创建六边形堆


        createPile(idArr = []) {
          if (idArr.length == 0) {
            idArr = this.getRandomPileIdArr();
          }

          let pile = new Node("Pile");
          let uiTransform = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).addComponentOnce(pile, UITransform);
          uiTransform.setContentSize(size(142, 121 + (idArr.length - 1) * this._spacing));
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(idArr, (id, index) => {
            let hexagon = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).instantiate((_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
              error: Error()
            }), gameModel) : gameModel).getHexagonPrefab(id));
            hexagon.name = String(id);
            var pos = hexagon.getPosition();
            pos.y += index * this._spacing;
            hexagon.setPosition(pos);
            pile.addChild(hexagon);
            let recipeItemData = (_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
              error: Error()
            }), gameModel) : gameModel).getRecipeItemById(id);
            console.log("create hexagon in pile", id, "recipeItemData", recipeItemData);
            hexagon.getComponent(_crd && Hexagon === void 0 ? (_reportPossibleCrUseOfHexagon({
              error: Error()
            }), Hexagon) : Hexagon).setView(recipeItemData);
          });
          pile.on(Node.EventType.TOUCH_START, this.pileTouchStart, this);
          pile.on(Node.EventType.TOUCH_MOVE, this.pileTouchMove, this);
          pile.on(Node.EventType.TOUCH_END, this.pileTouchEnd, this);
          pile.on(Node.EventType.TOUCH_CANCEL, this.pileTouchEnd, this);
          return pile;
        } // 随机生成六边形序列


        getRandomPileIdArr() {
          let progressIndex = this.getProgressCoefficientIndex();
          let pool = this.getColorPool(progressIndex);
          let hexagonNum = this.determineHexagonCount(progressIndex);
          let colorNum = this.determineHexagonColorCount(progressIndex);

          if (colorNum > hexagonNum) {
            colorNum = hexagonNum;
          }

          console.log("CoefficientIndex", progressIndex, "Pool", pool, "hexagonNum", hexagonNum, "colorNum", colorNum); // 随机挑选colorNum个颜色

          let colorArr = [];

          while (colorNum > 0) {
            colorArr.push(pool.splice((_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getRandomFloat(0, pool.length - 1, true), 1)[0]);
            colorNum--;
          }

          console.log("colorArr", colorArr); // colorArr中的元素已经是生成列表中的一个，先减去然后再随机选择剩余的六边形

          hexagonNum -= colorArr.length;
          let cIndex = 0;
          let hexagonArr = [];

          while (hexagonNum > 0) {
            let num = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getRandomFloat(0, hexagonNum, true);
            hexagonNum -= num;

            for (let i = 0; i < num; i++) {
              hexagonArr.push(colorArr[cIndex]);
            }

            if (++cIndex >= colorArr.length) {
              cIndex = 0;
            }
          }

          console.log("hexagonArr", hexagonArr); // 将两个数组合并

          let idArr = [];
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(colorArr, function (color, index) {
            idArr.push(color);
            idArr = idArr.concat(hexagonArr.filter(function (e) {
              return e == color;
            }));
          });
          console.log("getRandomPileIdArr", idArr);
          return idArr;
        }

        pileTouchStart(event) {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).audioNames.selectPile); // 弹起效果

          let pile = event.target;

          if (pile.canTouch) {
            tween(pile).by(0.1, {
              position: v3(0, 30)
            }).start();
          }
        }

        pileTouchMove(event) {
          let pile = event.target; // console.info("pileTouchMove", pile.name);

          if (pile.canTouch) {
            Tween.stopAllByTarget(pile); // 当前选中Pile跟随触摸点移动

            let pos = pile.getPosition();
            let delta = event.getDelta();
            pile.setPosition(v3(pos.x + delta.x, pos.y + delta.y)); // 移动过程中更新地图格子状态：选中/未选中

            let worldPos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace(pile.parent, pile.getPosition());
            let area = this.getAreaByWorldPos(worldPos); // 只有当前格子没有被选中才需要更新状态

            if (!(area && this._selectedArea && this._selectedArea == area)) {
              if (area && this.checkAreaIsEmpty(area)) {
                if (this._selectedArea) {
                  // 将上次选中的格子更新为“未选中”状态
                  this.setAreaState(this._selectedArea, 1);
                }

                this.setAreaState(area, 2);
                this._selectedArea = area;
              } else {
                if (this._selectedArea) {
                  this.setAreaState(this._selectedArea, 1);
                  this._selectedArea = null;
                }
              }
            }
          }
        }

        pileTouchEnd(event) {
          let pile = event.target;
          console.info("pileTouchEnd", pile.name, pile.getPosition(), pile.originalPos);

          if (pile.canTouch) {
            if (this._selectedArea) {
              // 如果选中的格子是空的，需要将当前移动堆上的六边形移到选中的格子上
              let worldPos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).convertToWorldSpace(this._selectedArea.parent, this._selectedArea.getPosition());
              let pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).convertToNodeSpace(pile.parent, worldPos).add(v3(0, 6));
              let selectedArea = this._selectedArea;
              let thisObj = this;
              console.log("move pile from", pile.getPosition(), " to ", pos, "worldPos", worldPos);
              tween(pile).to(0.1, {
                position: pos
              }).call(function () {
                // 将当前堆上的六边形移动到选中的格子上
                while (pile.children.length > 0) {
                  let hexagon = pile.children[0];
                  let pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                    error: Error()
                  }), cocosUtil) : cocosUtil).convertToNodeSpace(selectedArea, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                    error: Error()
                  }), cocosUtil) : cocosUtil).convertToWorldSpace(hexagon.parent, hexagon.getPosition()));
                  hexagon.setPosition(pos);
                  hexagon.parent = selectedArea;
                }

                pile.removeFromParent(); // 检查是否可以合并

                thisObj.checkAndMergeArea(selectedArea);
              }).start();
              (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
                error: Error()
              }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).audioNames.putPile);
              this.setAreaState(this._selectedArea, 1);
              this._selectedArea = null;
            } else {
              // 如果没有选中格子，需要将当前移动的堆恢复到原来的位置
              tween(pile).to(0.2, {
                position: pile.originalPos
              }).start();

              if (this._selectedArea) {
                this.setAreaState(this._selectedArea, 1);
              }

              this._selectedArea = null;
            }
          }
        }

        checkAndMergeArea(area) {
          // 找到可合并的格子列表
          let thisObj = this;
          let nearAreaArr = this.getNearAreaArr(area);
          let topColor = this.getTopColorOfArea(area);
          let mergeAreaArr = nearAreaArr.filter(function (e) {
            return e.children.length > 0 && thisObj.getTopColorOfArea(e) == topColor;
          }); // 存在可合并的格子

          if (mergeAreaArr.length > 0) {
            let dest;
            let src;

            if (mergeAreaArr.length > 1) {
              src = this.selectMergeArea(mergeAreaArr);
              dest = area;
            } else {
              src = this.selectMergeArea(mergeAreaArr.concat(area));
              dest = area.uuid == src.uuid ? mergeAreaArr[0] : area;
            }

            console.info("merge two piles", dest.name, src.name);

            this._doubleCheckAreaArr.push(dest);

            this._doubleCheckAreaArr.push(src);

            this.mergeCollor(dest, src);
            return;
          } // 删除已经检查过的格子


          if (this._doubleCheckAreaArr.length > 0) {
            let index = this._doubleCheckAreaArr.findIndex(function (e) {
              return e.uuid == area.uuid;
            });

            if (index != -1) {
              this._doubleCheckAreaArr.splice(index, 1);
            }

            this.doubleCheckMapArea();
            return;
          }

          let checkAndFill = function () {
            thisObj.checkGameOver();

            if (thisObj.countStackPiles() == 0) {
              thisObj.fillStackPiles();
            }
          }; // 存在可以消除的格子


          if (this._waitClearAreaArr.length > 0) {
            let index = 0;
            let total = this._waitClearAreaArr.length;

            while (this._waitClearAreaArr.length > 0) {
              let clearArea = this._waitClearAreaArr.shift();

              this.eliminateColor(clearArea, function () {
                index++;

                if (index == total) {
                  checkAndFill();
                }
              });
            }

            return;
          }

          checkAndFill();
        } // 从给定列表中找到一个待合并六边形堆


        selectMergeArea(areaArr) {
          // 1. 优先挑选有更多不同颜色的Pile
          let tmpArr = [];
          let maxColorTypeNum = 0;
          let thisObj = this;
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(areaArr, function (area, index) {
            let num = thisObj.countColorTypeOfArea(area);

            if (num > maxColorTypeNum) {
              maxColorTypeNum = num;
              tmpArr = [];
              tmpArr.push(area);
            } else {
              if (num == maxColorTypeNum) {
                tmpArr.push(area);
              }
            }
          });

          if (tmpArr.length == 1) {
            return tmpArr[0];
          } // 2. 选择相邻堆顶有与当前堆第二种颜色相同六边形的格子，产生连消效果


          let tmpArr2 = [];

          if (maxColorTypeNum > 1) {
            (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).forArr(tmpArr, function (area, index) {
              let nearAreaArr = thisObj.getNearAreaArr(area);
              let secondColor = thisObj.getSecondColorOfArea(area);
              let results = nearAreaArr.filter(function (e) {
                return e.children.length > 0 && thisObj.getTopColorOfArea(e) == secondColor;
              });

              if (results.length != 0) {
                tmpArr2.push(area);
              }
            });
          }

          if (tmpArr2.length == 1) {
            return tmpArr2[0];
          } // 3. 优先选择堆顶颜色数量少的，尽可能把所有六边形消除完


          let tmpArr3 = [];
          let minTopColorNum = 9999;
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(tmpArr, function (area, index) {
            let num = thisObj.countTopColorOfArea(area);

            if (num < minTopColorNum) {
              minTopColorNum = num;
              tmpArr3 = [];
              tmpArr3.push(area);
            } else {
              if (num == minTopColorNum) {
                tmpArr3.push(area);
              }
            }
          });

          if (tmpArr3.length == 1) {
            return tmpArr3[0];
          } // 4. 随机挑选一个


          return tmpArr3[Math.floor((_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).getRandomFloat(0, tmpArr3.length - 1, true))];
        }

        mergeCollor(destArea, srcArea) {
          console.info("merge " + srcArea.name + " to " + destArea.name); // 找出src堆顶相同颜色的所有六边形

          let hexagonArr = this.getTopColorNodeArrOfArea(srcArea).sort(function (a, b) {
            return a.getPosition().y - b.getPosition().y;
          });
          let mergeNum = hexagonArr.length; // 确定dest堆最后一个六边形的高度

          let topHexagonPos = destArea.children[destArea.children.length - 1].getPosition(); // 最后一个六边形的高度加上待合并的六边形的高度

          let topHexagonPosIfMerged = v3(topHexagonPos).add(v3(0, this._spacing).multiplyScalar(mergeNum));
          console.info("topHexagonPos", topHexagonPos, "topHexagonPosIfMerged", topHexagonPosIfMerged, "getTopColorNodeArrOfArea", hexagonArr.length); // 合并完成后目标格子最后一个六边形的位置

          let destTopHexagonPos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToNodeSpace(this._mergeTemp, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(destArea, topHexagonPosIfMerged)); // 借助一个中间点，将src堆中的六边形翻转移动到dest堆中，目的是让整个过程更加平顺

          let thisObj = this;
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(hexagonArr, function (hexagon, index) {
            // 待移动六边形的位置
            let srcHexagonPos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToNodeSpace(thisObj._mergeTemp, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace(srcArea, hexagon.getPosition())); // 翻转的中间点

            let midPos = v3((srcHexagonPos.x + destTopHexagonPos.x) / 2, (srcHexagonPos.y + destTopHexagonPos.y) / 2).add(v3(0, 150)); // 移动到目标位置的坐标点

            let destHexagonPos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToNodeSpace(thisObj._mergeTemp, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace(destArea, v3(topHexagonPos).add(v3(0, thisObj._spacing).multiplyScalar(mergeNum - index))));
            let finalHexagonPos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToNodeSpace(destArea, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace(thisObj._mergeTemp, destHexagonPos));
            console.info("merge hexagon, pos:", hexagon.getPosition(), "srcHexagonPos:", srcHexagonPos, "destTopHexagonPos:", destTopHexagonPos, "midPos", midPos, "destHexagonPos", destHexagonPos, "finalHexagonPos", finalHexagonPos);
            hexagon.setPosition(srcHexagonPos);
            hexagon.parent = thisObj._mergeTemp;
            tween(hexagon).delay(0.065 * (mergeNum - index - 1)).parallel(tween(hexagon).to(0.195, {
              position: midPos
            }), tween(hexagon).to(0.195, {
              scale: v3(1, 0.05, 1)
            })).parallel(tween(hexagon).to(0.195, {
              position: destHexagonPos
            }), tween(hexagon).to(0.13, {
              scale: v3(1, 1, 1)
            })).call(function () {
              (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
                error: Error()
              }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).audioNames.mergePile);
              hexagon.setPosition(finalHexagonPos);
              hexagon.parent = destArea;

              if (index == 0) {
                destArea.children.sort(function (a, b) {
                  return a.getPosition().y - b.getPosition().y;
                });

                if (thisObj.checkAreaCannEliminate(destArea) && !thisObj.checkAreaInWaitClearArr(destArea)) {
                  thisObj._waitClearAreaArr.push(destArea);
                }

                if (thisObj.checkAreaCannEliminate(destArea) && !thisObj._waitClearAreaArr.some(function (e) {
                  return e.uuid == destArea.uuid;
                })) {
                  thisObj._waitClearAreaArr.push(destArea);
                } // 再次检查


                thisObj.doubleCheckMapArea();
              }
            }).start();
          });
        }

        doubleCheckMapArea() {
          let thisObj = this;
          this._doubleCheckAreaArr = this._doubleCheckAreaArr.filter(function (e) {
            return e.children.length > 0;
          }); // 如果有多个待检查的格子，随机选择一个

          if (this._doubleCheckAreaArr.length > 0) {
            let nextArea = this._doubleCheckAreaArr[(_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getRandomFloat(0, this._doubleCheckAreaArr.length - 1, true)];

            this.checkAndMergeArea(nextArea);
            return;
          }

          let checkAndFill = function () {
            thisObj.checkGameOver();

            if (thisObj.countStackPiles() == 0) {
              thisObj.fillStackPiles();
            }
          }; // 如果有可消除的格子


          if (this._waitClearAreaArr.length > 0) {
            let index = 0;
            let total = this._waitClearAreaArr.length;

            while (this._waitClearAreaArr.length > 0) {
              let area = this._waitClearAreaArr.shift();

              this.eliminateColor(area, function () {
                index++;
                console.log("eliminate hexagon, index:", index, "total:", total);

                if (index >= total) {
                  checkAndFill();
                }
              });
            }

            return;
          }

          checkAndFill();
        } // 消除指定格子的六边形


        eliminateColor(area, onComplete) {
          let hexagons = this.getTopColorNodeArrOfArea(area);
          let total = hexagons.length;
          let eliminatedNum = 0;
          let thisObj = this;
          let index = 0;

          for (let f = function f() {
            let hexagon = hexagons.shift();
            index++;
            tween(hexagon).delay(0.05 * (total - hexagons.length)).to(0.1, {
              scale: v3(0.5, 0.5)
            }).call(function () {
              eliminatedNum++;
              (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
                error: Error()
              }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).audioNames.eliminatePile);
              hexagon.removeFromParent();
              thisObj.showFlyAnimation(area, hexagon.getComponent(_crd && Hexagon === void 0 ? (_reportPossibleCrUseOfHexagon({
                error: Error()
              }), Hexagon) : Hexagon).recipeId, index); // 消除最后一个六边形时更新进度
              // if (eliminatedNum == total - 1) {
              //     area.removeAllChildren();
              //     thisObj.showScoreAnimation(area, hexagon.getComponent(Hexagon).recipeId);
              //     if (onComplete) {
              //         onComplete();
              //     }
              // }
            }).start();
          }; hexagons.length > 0;) {
            f();
          }

          this._alreadyClearTotal += total;
        }

        showFlyAnimation(area, recipeId, index) {
          console.log("displayScoreAnimation", recipeId);

          if ((_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
            error: Error()
          }), gameModel) : gameModel).getRecipeItemById(recipeId).remainClearNum <= 0) {
            console.log("displayScoreAnimation: no remain clear num", (_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
              error: Error()
            }), gameModel) : gameModel).getRecipeItemById(recipeId).remainClearNum);
            return;
          }

          let recipeItemNode = this.findRecipeItemNodeById(recipeId);

          if (!recipeItemNode) {
            console.log("displayScoreAnimation: no recipeItemNode", recipeItemNode);
            return;
          }

          let flyEffect = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).instantiate(this._flyEffect);
          flyEffect.getComponent(MotionStreak).color = new Color("#b8eefd"); // TODO 子节点

          this.node.addChild(flyEffect);
          let startPos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToNodeSpace(this.node, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(area.parent, area.getPosition()));
          flyEffect.setPosition(startPos);
          flyEffect.active = true;
          let endPos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToNodeSpace(this.node, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(recipeItemNode.parent, recipeItemNode.getPosition()));
          let distance = Math.abs(startPos.subtract(endPos).length());
          let thisObj = this;
          let ctlPos = v3(startPos.x + (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).getRandomFloat(0, 150, true) * (index % 2 == 0 ? 1 : -1), startPos.y + (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).getRandomFloat(-30, 60, true));
          tween(flyEffect).to(distance / 900, {
            position: endPos
          }, {
            onUpdate: function (target, ratio) {
              let pos = thisObj.calculateBezierPosition(ratio, startPos, ctlPos, endPos);
              flyEffect.setPosition(pos);
            }
          }).call(function () {
            // var effect = cocosUtil.instantiate(thisObj._scoringEffect);
            // thisObj.node.addChild(effect);
            // effect.setPosition(cocosUtil.convertToNodeSpace(thisObj.node, cocosUtil.convertToWorldSpace(point.parent, point.getPosition())));
            // effect.active = true;
            // var spine = effect.getComponent(sp.Skeleton);
            // spine.setAnimation(0, "animation", false);
            // spine.setCompleteListener(function() {
            //     effect.removeFromParent();
            //     effect.destroy();
            // })
            // tween(thisObj._progressNode)
            //     .to(0.1, {
            //         scale: v3(1.05, 1.05, 1.05)
            //     })
            //     .to(0.1, {
            //         scale: v3(1, 1, 1)
            //     })
            //     .start();
            flyEffect.destroy(); // recipeItemNode.getComponent(RecipeItem).showClearAnimation();
            // // TODO 食物呼吸效果
            // thisObj.refreshProgress();
            // //thisObj.updateProgress();
            // // 通关
            // if (thisObj.getRemainRecipeItemsTotal() == 0) {
            //     console.log("pass game")
            //     thisObj.doSettlement(true);
            // }
          }).start();
        }

        showScoreAnimation(area, recipeId) {
          console.log("displayScoreAnimation", recipeId);

          if ((_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
            error: Error()
          }), gameModel) : gameModel).getRecipeItemById(recipeId).remainClearNum <= 0) {
            console.log("displayScoreAnimation: no remain clear num", (_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
              error: Error()
            }), gameModel) : gameModel).getRecipeItemById(recipeId).remainClearNum);
            return;
          }

          let recipeItemNode = this.findRecipeItemNodeById(recipeId);

          if (!recipeItemNode) {
            console.log("displayScoreAnimation: no recipeItemNode", recipeItemNode);
            return;
          }

          let point = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).instantiate(this._flyEffect);
          this.node.addChild(point);
          let pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToNodeSpace(this.node, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(area.parent, area.getPosition()));
          point.setPosition(pos);
          point.active = true;
          let destPos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToNodeSpace(this.node, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(recipeItemNode.parent, recipeItemNode.getPosition()));
          let distance = Math.abs(pos.subtract(destPos).length());
          let thisObj = this;
          tween(point).to(distance / 1e3, {
            position: destPos
          }).call(function () {
            // var effect = cocosUtil.instantiate(thisObj._scoringEffect);
            // thisObj.node.addChild(effect);
            // effect.setPosition(cocosUtil.convertToNodeSpace(thisObj.node, cocosUtil.convertToWorldSpace(point.parent, point.getPosition())));
            // effect.active = true;
            // var spine = effect.getComponent(sp.Skeleton);
            // spine.setAnimation(0, "animation", false);
            // spine.setCompleteListener(function() {
            //     effect.removeFromParent();
            //     effect.destroy();
            // })
            // tween(thisObj._progressNode)
            //     .to(0.1, {
            //         scale: v3(1.05, 1.05, 1.05)
            //     })
            //     .to(0.1, {
            //         scale: v3(1, 1, 1)
            //     })
            //     .start();
            point.destroy();
            recipeItemNode.getComponent(_crd && RecipeItem === void 0 ? (_reportPossibleCrUseOfRecipeItem({
              error: Error()
            }), RecipeItem) : RecipeItem).showClearAnimation(); // TODO 食物呼吸效果

            thisObj.refreshProgress(); //thisObj.updateProgress();
            // 通关

            if (thisObj.getRemainRecipeItemsTotal() == 0) {
              console.log("pass game");
              thisObj.doSettlement(true);
            }
          }).start();
        } // 填充候选堆


        fillStackPiles() {
          let thisObj = this;

          let fill = function (index) {
            let pile = thisObj.createPile();

            thisObj._mapStack.addChild(pile);

            pile.active = true;
            let pos = pile.getPosition();
            pos.x = thisObj._stackPilePosXArr[index] + 750;
            pile.setPosition(pos);
            tween(pile).delay(0.36 * index).by(0.3, {
              position: v3(-750, 0, 0)
            }).call(function () {
              (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
                error: Error()
              }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).audioNames.pileIn);
            }).to(0.06, {
              scale: v3(1.1, 1.1, 1.1)
            }).to(0.14, {
              scale: v3(1, 1, 1)
            }).call(function () {
              let pos = pile.getPosition();
              pos.x = thisObj._stackPilePosXArr[index];
              pile.setPosition(pos);
              pile.canTouch = true;
              pile.originalPos = pos;
            }).start();
          };

          for (let i = 0; i < 3; i++) {
            fill(i);
          }
        }

        getAreaByWorldPos(pos) {
          let target = null;
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this._mapArea.children, function (area, index) {
            if (area.active && (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace(area.parent, area.getPosition()).equals(pos, 62)) {
              target = area;
              return true;
            }

            return false;
          });
          return target;
        } // 设置格子状态：1-未选中 2-选中


        setAreaState(area, state) {
          switch (state) {
            case 1:
              this.setSpriteFrame2(area, "img_liubian_di"); // area.getComponent(Sprite).spriteFrame = this._spritePool.getChildByName("Normal").getComponent(Sprite).spriteFrame;

              break;

            case 2:
              this.setSpriteFrame2(area, "img_liubian_di2"); // area.getComponent(Sprite).spriteFrame = this._spritePool.getChildByName("Selected").getComponent(Sprite).spriteFrame;

              break;
          }
        } // 是否是空格子


        checkAreaIsEmpty(area) {
          return area.children.length <= 0;
        } // 查找相邻的格子列表


        getNearAreaArr(area) {
          return this._mapArea.children.filter(function (e) {
            return e.active && e.uuid != area.uuid && e.getPosition().equals(area.getPosition(), 140);
          });
        } // 获取堆顶六边形颜色


        getTopColorOfArea(area) {
          assert(area.children.length > 0);
          return Number(area.children[area.children.length - 1].name);
        } // 获取堆第二种六边形颜色


        getSecondColorOfArea(area) {
          let second;
          let top = this.getTopColorOfArea(area);

          for (let i = area.children.length - 2; i >= 0 && !second;) {
            let c = Number(area.children[i].name);

            if (c != top) {
              second = c;
            }

            i--;
          }

          return second;
        } // 获取与堆顶相同颜色的所有六边形


        getTopColorNodeArrOfArea(area) {
          let top = this.getTopColorOfArea(area);
          let nodeArr = [];
          let n = area.children.length - 1;

          for (; n >= 0 && top == Number(area.children[n].name);) {
            nodeArr.push(area.children[n]);
            n--;
          }

          return nodeArr;
        } // 获取堆顶相同颜色六边形数量


        countTopColorOfArea(area) {
          let top = this.getTopColorOfArea(area);
          let n = 0;

          for (let i = area.children.length - 1; i >= 0 && top == Number(area.children[i].name);) {
            n++;
            i--;
          }

          return n;
        } // 获取不同颜色六边形数量


        countColorTypeOfArea(area) {
          let typeArr = [];
          area.children.forEach(function (t) {
            let has = typeArr.some(function (id) {
              return id == t.name;
            });

            if (!has) {
              typeArr.push(t.name);
            }
          });
          return typeArr.length;
        } // 获取空格子数量


        countEmptyAreas() {
          return this._mapArea.children.filter(function (c) {
            return c.active && c.children.length == 0;
          }).length;
        } // 获取剩余的堆数量


        countStackPiles() {
          return this._mapStack.children.length;
        } // 计算进度


        getCurrentProgress() {
          return Math.floor(this._alreadyClearTotal / this._targetClearTotal * 100);
        } // 判断格子是否可以消除


        checkAreaCannEliminate(area) {
          return this.countTopColorOfArea(area) >= 10 && !this.getSecondColorOfArea(area);
        } // 判断格子是否已经在待消除列表中


        checkAreaInWaitClearArr(area) {
          return this._waitClearAreaArr.some(function (e) {
            return e.uuid == area.uuid;
          });
        } // 广告解锁


        onVideoUnlockClick(event) {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).audioNames.btnClick);
          event.target.removeFromParent();
        }

        checkGameOver() {} // 根据当前进度[0-100]确定一个下标，用于随机生成六边形堆


        getProgressCoefficientIndex() {
          var progress = this.getCurrentProgress();

          let index = this._progressCoefficientArr.findIndex(function (e) {
            return e >= progress;
          });

          return index == -1 ? this._progressCoefficientArr.length - 1 : index;
        }

        getColorPool(index) {
          // var y = [
          //     [1, 2, 3],
          //     [1, 2, 3],
          //     [1, 2, 3, 4],
          //     [1, 2, 3, 4],
          //     [1, 2, 3, 4]
          // ];
          // var C = [
          //     [1, 2, 3, 4, 5],
          //     [1, 2, 3, 4, 5, 6],
          //     [1, 2, 3, 4, 5, 7],
          //     [1, 2, 3, 4, 5, 7],
          //     [1, 2, 3, 4, 5, 7]
          // ];
          // var _ = [
          //     [1, 2, 3, 4, 5],
          //     [1, 2, 3, 4, 5, 6],
          //     [1, 2, 3, 4, 5, 6, 7],
          //     [1, 2, 3, 4, 5, 6, 7, 8],
          //     [1, 2, 3, 4, 5, 6, 7, 8]
          // ];
          // var b = [
          //     [1, 2, 3, 4],
          //     [1, 2, 3, 4, 5],
          //     [1, 2, 3, 4, 5, 6],
          //     [1, 2, 3, 4, 5, 6, 7],
          //     [1, 2, 3, 4, 5, 6, 7, 8]
          // ];
          // let data = [y, C, _, b][this._colorPoolIndex];
          return (_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
            error: Error()
          }), gameModel) : gameModel).mapRecipeItemArr.map(data => data.id);
        }

        // 确定创建六边形的数量
        determineHexagonCount(index) {
          //let probs = createNumProbs[index];
          // 每次生成六边形堆时用来计算六边形数量的概率
          let probs = {
            3: 15,
            4: 35,
            5: 50
          };
          let val = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).getRandomFloat(0, 100, true);
          var total = 0;

          for (let k in probs) {
            if ((total += probs[k]) >= val) {
              return Number(k);
            }
          }
        } // 确定生成几种颜色的六边形


        determineHexagonColorCount(index) {
          //let probs = createColorNumProbs[index];
          // let num = this.countEmptyAreas();
          // if (num <= 3) {
          //     map = g[0];
          // } else if (num <= 6) {
          //     map = g[1];
          // } else if (num <= 9) {
          //     map = g[2];
          // } else {
          //     map = createColorNumProbs[index];
          // }
          let probs = {
            1: 60,
            2: 40
          };
          let val = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).getRandomFloat(0, 100, true);
          let total = 0;

          for (let k in probs) {
            if ((total += probs[k]) >= val) {
              return Number(k);
            }
          }
        } // updateProgress() {
        //     let thisObj = this;
        //     let progressText = find("Text", this._progressNode);
        //     // 分10次更新到目标进度
        //     let index = 0;
        //     let delta = (this._alreadyClearTotal - this._alreadyRenderClearTotal) / 10;
        //     this.unschedule(this._renderProgressFunc);
        //     this._renderProgressFunc = function() {
        //         index++;
        //         thisObj._alreadyRenderClearTotal += delta;
        //         thisObj.setProgressBar(thisObj._progressNode, thisObj._alreadyRenderClearTotal / thisObj._targetClearTotal);
        //         thisObj.setString(progressText, parseInt(String(thisObj._alreadyRenderClearTotal)) + "/" + thisObj._targetClearTotal);
        //         if (index == 11) {
        //             thisObj.setString(progressText, thisObj._alreadyClearTotal + "/" + thisObj._targetClearTotal);
        //             thisObj.setProgressBar(this._progressNode, thisObj._alreadyClearTotal / thisObj._targetClearTotal);
        //         }
        //     }
        //     // 更新动画
        //     this.schedule(this._renderProgressFunc, delta / 200 / 10, 10);
        // }
        // 分数解锁


        unlockAreaByPoint(area) {
          tween(area.getChildByName("Lock")).by(0.1, {
            angle: 15
          }).by(0.1, {
            angle: -15
          }).by(0.1, {
            angle: -15
          }).by(0.1, {
            angle: 15
          }).union().repeat(2).call(function () {
            area.getChildByName("Point").active = false;
            area.getChildByName("Lock").active = false;
            area.getChildByName("UnLock").active = true;
            let uiOpacity = area.getComponent(UIOpacity);
            tween(uiOpacity).delay(0.2).to(0.3, {
              opacity: 0
            }).call(function () {
              area.removeFromParent();
            }).start();
            let bgUIOpacity = area.getChildByName("Bg").getComponent(UIOpacity);
            tween(bgUIOpacity).delay(0.2).to(0.6, {
              opacity: 0
            }).start();
          }).start();
        }

        doSettlement(isWin = false) {
          if (isWin) {
            let obj = {
              icon: (_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
                error: Error()
              }), gameModel) : gameModel).mapFoodRow.icon,
              name: (_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
                error: Error()
              }), gameModel) : gameModel).mapFoodRow.name
            };
            (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().setLevelData({});
            (_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
              error: Error()
            }), gameModel) : gameModel).gameLayer.popLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.GetFoodLayer, obj);
          } else {
            (_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
              error: Error()
            }), gameModel) : gameModel).gameLayer.popLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.LossLayer);
          }
        } // 获取解锁的格子列表


        getNormalAreaArr() {
          return this._mapArea.children.filter(function (e) {
            return e.children.length > 0 && !["VideoUnlockArea"].some(function (t) {
              return t == e.children[0].name;
            });
          });
        } // 随机清除指定数量的格子


        randomClearAreasByNum(num) {
          let areaArr = this.getNormalAreaArr();

          while (num-- > 0 && areaArr.length > 0) {
            this.clearArea((_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getRandomItemByArr(areaArr, true));
          }
        } // 清除指定格子上的所有六边形


        clearArea(area) {
          let aniNode = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).instantiate(this._clearEffect);

          this._mergeTemp.addChild(aniNode);

          let childrenCount = area.children.length;
          let pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToNodeSpace(this._mergeTemp, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(area, area.children[childrenCount - 1].getPosition()).add(v3(25, 0)));
          aniNode.setPosition(pos);
          aniNode.active = true;
          var spine = aniNode.getComponent(sp.Skeleton);
          spine.setAnimation(0, "animation", false);
          spine.setCompleteListener(function () {
            aniNode.removeFromParent();
            aniNode.destroy();
            area.removeAllChildren();
          });
        } // 重发


        refreshStackPiles() {
          let thisObj = this;
          let childrenCount = this._mapStack.children.length;
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this._mapStack.children, function (pile, index) {
            pile.canTouch = false;
            tween(pile).delay(0.36 * index).by(0.3, {
              position: v3(-750, 0, 0)
            }).call(function () {
              pile.removeFromParent();
              pile.destroy();

              if (index == childrenCount - 1) {
                thisObj.fillStackPiles();
              }
            }).start();
          });
        } // 检查是否可以移动


        checkCanMove() {
          return !(this._doubleCheckAreaArr.length > 0 || this._waitClearAreaArr.length > 0);
        }

        makeMove() {
          let thisObj = this; // 为每个Area添加一个子节点，注册一个触摸监听事件

          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.getNormalAreaArr(), function (area, index) {
            let node = new Node("Touch");
            area.addChild(node);
            let childrenCount = area.children.length;
            let uiTransform = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).addComponentOnce(node, UITransform);
            uiTransform.setContentSize(size(142, 121 + (childrenCount - 1) * thisObj._spacing));
            uiTransform.setAnchorPoint(v2(0.5, 0));
            node.setPosition(v3(0, -60.5));
            console.log("add touch node to", area.name);
            node.on(Node.EventType.TOUCH_MOVE, thisObj.areaTouchMove, thisObj);
            node.on(Node.EventType.TOUCH_END, thisObj.areaTouchEnd, thisObj);
            node.on(Node.EventType.TOUCH_CANCEL, thisObj.areaTouchEnd, thisObj);
          });
        }

        areaTouchMove(event) {
          console.log("areaTouchMove", event.target.name); // 借助一个临时时节点来移动六边形堆

          if (!this._movingPile) {
            let area = event.target.parent;
            let hexagonArr = area.children.filter(function (e) {
              return e.name != "Touch";
            });
            let tmpNode = new Node("TouchMove");
            tmpNode.setPosition((_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToNodeSpace(this._mergeTemp, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace(area, hexagonArr[0].getPosition())));

            this._mergeTemp.addChild(tmpNode);

            (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).forArr(hexagonArr, function (hexagon, index) {
              hexagon.parent = tmpNode;
            });
            this._movingPile = tmpNode;
          } // 跟随触摸点移动


          let movePile = this._movingPile;
          let pos = movePile.getPosition();
          let delta = event.getDelta();
          movePile.setPosition(v3(pos.x + delta.x, pos.y + delta.y));
          let selectArea = this.getAreaByWorldPos((_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(movePile.parent, movePile.getPosition()));
          console.log("movePile", movePile.getPosition(), "selectArea", selectArea.getPosition());

          if (!(selectArea && this._selectedArea && this._selectedArea == selectArea)) {
            // 判断移动时选中的方格是否可以移入
            if (selectArea && this.checkAreaCanPutInByMove(selectArea)) {
              if (this._selectedArea) {
                if (this._switchArea) {
                  this.moveAreaContent(this._switchArea, this._selectedArea);
                }

                this.setAreaState(this._selectedArea, 1);
              }

              if (this.checkAreaCanSwitchByMove(selectArea)) {
                this.moveAreaContent(selectArea, event.target.parent);
                this._switchArea = event.target.parent;
              }

              this.setAreaState(selectArea, 2);
              this._selectedArea = selectArea;
            } else {
              if (this._selectedArea) {
                if (this._switchArea) {
                  this.moveAreaContent(this._switchArea, this._selectedArea);
                }

                this.setAreaState(this._selectedArea, 1);
                this._selectedArea = null;
              }
            }
          }
        }

        areaTouchEnd(event) {
          console.log("--areaTouchEnd", event.target.name);
          let parentNode = event.target.parent; // 删除Touch节点时会触发Touch Cancel事件

          if (!parentNode) {
            return;
          }

          let thisObj = this;

          if (this._selectedArea && this._selectedArea.uuid != parentNode.uuid) {
            let movePile = this._movingPile;
            let selectArea = this._selectedArea;
            this._movingPile = null;
            console.log("movePile", movePile.name);
            tween(movePile).to(0.1, {
              position: selectArea.getPosition()
            }).call(function () {
              console.log("move pile length", movePile.children.length); // 将移动的六边形堆逐个放到目标格子

              while (movePile.children.length > 0) {
                let hexagon = movePile.children[0];
                console.log("move hexagon of pile to selected area", hexagon.name);
                hexagon.setPosition(v3(0, thisObj._spacing).multiplyScalar(selectArea.children.length).add(v3(0, 6)));
                hexagon.parent = selectArea;
              }

              if (thisObj._switchArea) {
                thisObj._doubleCheckAreaArr.push(thisObj._switchArea);

                thisObj._switchArea = null;
              }

              thisObj.checkAndMergeArea(selectArea);
            }).start();
            this.setAreaState(this._selectedArea, 1);
            this._selectedArea = null;
            (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).audioNames.putPile);
            this.cancelMove();
          } else {
            let movePile = this._movingPile;
            this._movingPile = null;
            tween(movePile).to(0.1, {
              position: parentNode.getPosition()
            }).call(function () {
              // 将移动的六边形堆逐个放到目标格子
              while (movePile.children.length > 0) {
                let hexagon = movePile.children[0];
                hexagon.setPosition(v3(0, thisObj._spacing).multiplyScalar(parentNode.children.length).add(v3(0, 6)));
                hexagon.parent = movePile;
              }
            }).start();
            (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).audioNames.putPile);
          }
        } // 使用移动道具时判断当前格子是否可以移入


        checkAreaCanPutInByMove(area) {
          return area.children.length != 1 || !["VideoUnlockArea"].some(function (e) {
            return e == area.children[0].name;
          });
        } // 使用移动道具时判断当前格子是否可以交换


        checkAreaCanSwitchByMove(area) {
          return area.children.length > 0 && (area.children.length != 1 || !["VideoUnlockArea"].some(function (e) {
            return e == area.children[0].name;
          }));
        }

        // 将src上的六边形移动到dest上
        moveAreaContent(src, dest) {
          src.children.filter(function (e) {
            return e.name != "Touch";
          }).forEach(function (e) {
            return e.parent = dest;
          });
        }

        cancelMove() {
          console.log("cancel move");
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.getNormalAreaArr(), function (area, index) {
            let touch = area.getChildByName("Touch");

            if (touch) {
              console.log("remove touch node", area.name);
              touch.removeFromParent();
            }
          });
        }

      }) || _class)); // 每次生成六边形堆时用来计算六边形数量的概率


      createNumProbs = [{
        2: 10,
        3: 20,
        4: 30,
        5: 30,
        6: 10
      }, {
        2: 10,
        3: 15,
        4: 35,
        5: 30,
        6: 10
      }, {
        2: 10,
        3: 20,
        4: 30,
        5: 25,
        6: 15
      }, {
        2: 10,
        3: 10,
        4: 25,
        5: 35,
        6: 20
      }, {
        2: 10,
        3: 10,
        4: 20,
        5: 40,
        6: 20
      }]; // 每次生成六边形堆时用来计算六边形颜色数量的概率
      // 生成1中或2中颜色

      createColorNumProbs = [{
        1: 30,
        2: 60,
        3: 10
      }, {
        1: 30,
        2: 50,
        3: 20
      }, {
        1: 25,
        2: 50,
        3: 25
      }, {
        1: 20,
        2: 50,
        3: 30
      }, {
        1: 20,
        2: 45,
        3: 35
      }];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7beb9f7c8c2ba1ee34bb93a858c177422ad79fa6.js.map