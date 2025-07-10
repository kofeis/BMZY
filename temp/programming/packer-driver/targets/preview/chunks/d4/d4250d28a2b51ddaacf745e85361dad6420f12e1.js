System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, resManager, AudioManager, _crd, audioManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfresManager(extras) {
    _reporterNs.report("resManager", "./ResManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
    }, function (_unresolved_2) {
      resManager = _unresolved_2.resManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1eacanCFR1Hg6quHhqw/6lG", "AudioManager", undefined);

      __checkObsolete__(['AudioClip', 'AudioSource']);

      AudioManager = class AudioManager {
        constructor() {
          this.musicAudioSource = void 0;
          this.effectAudioSource = void 0;
          // 缓存clip
          this.audioClips = {};
          this.musicVolume = 1;
          this.effectVolume = 1;
          this.musicName = "";
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new AudioManager();
          }

          return this._instance;
        }

        setMusicAudioSource(audioSource) {
          this.musicAudioSource = audioSource;
        }

        setEffectAudioSource(audioSource) {
          this.effectAudioSource = audioSource;
        }

        initData(data) {
          if (!data) {
            data = {};
          }

          if (data.musicVolume != undefined) {
            this.musicVolume = data.musicVolume;
          }

          if (data.effectVolume != undefined) {
            this.effectVolume = data.effectVolume;
          }
        }

        getSaveData(now) {
          var data = {};
          data.musicVolume = this.musicVolume;
          data.effectVolume = this.effectVolume;
          return data;
        }

        loadAudiosByPath(path, onProgress, onComplete) {
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadAssetByResoucesDir(path, AudioClip, percent => {
            if (onProgress) {
              if (percent > 0.96) {
                // 解决提前回调百分百导致的音频资源还未缓存到audioClips
                percent = 0.96;
              }

              if (onProgress) {
                onProgress(percent);
              }
            }
          }, (err, assetArr) => {
            for (var i in assetArr) {
              var asset = assetArr[i];
              var name = asset.name;

              if (!name) {
                continue;
              }

              this.audioClips[name] = asset;
            }

            if (onComplete) {
              onComplete();
            }
          });
        }

        loadAudio(path, onComplete) {
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadAsset("audio", path, AudioClip, null, (err, asset) => {
            if (err) {
              if (onComplete) {
                onComplete();
              }

              return;
            }

            this.audioClips[asset.name] = asset;

            if (onComplete) {
              onComplete(asset);
            }
          });
        }

        getMusiceVolume() {
          return this.musicVolume;
        }

        setMusicVolume(val) {
          val = Math.round(val * 1000) / 1000;
          this.musicVolume = val;
          this.musicAudioSource.volume = val;

          if (val <= 0) {
            this.musicAudioSource.pause();
            return;
          }

          this.playMusic(this.musicName);
        }

        playMusic(musicName) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!musicName) {
              return;
            }

            _this.musicName = musicName;

            if (_this.musicVolume <= 0) {
              return;
            }

            var clip = yield _this.getAudioClip(musicName);

            if (!clip) {
              return;
            }

            if (_this.musicAudioSource.playing) {
              if (_this.musicAudioSource.clip == clip) {
                return;
              }

              _this.musicAudioSource.stop();
            }

            _this.musicAudioSource.clip = clip;
            _this.musicAudioSource.loop = true;

            _this.musicAudioSource.play();
          })();
        } // 游戏进入前台运行时判断是否需要播放音乐


        gameOnShow(force) {
          if (force === void 0) {
            force = false;
          }

          if (!this.musicAudioSource || this.musicVolume <= 0) {
            return;
          }

          console.info("gameOnShow:", this.musicAudioSource.playing, this.musicAudioSource.state);

          if (!this.musicAudioSource.playing || force) {
            this.musicAudioSource.play();
          }
        }

        getEffectVolume() {
          return this.effectVolume;
        }

        setEffectVolume(val) {
          val = Math.round(val * 1000) / 1000;
          this.effectVolume = val;
          this.effectAudioSource.volume = val;
        }

        playEffect(effectName) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!effectName || _this2.effectVolume <= 0) {
              return;
            }

            var clip = yield _this2.getAudioClip(effectName);

            if (!clip) {
              return;
            }

            _this2.effectAudioSource.playOneShot(clip);
          })();
        }

        getAudioClip(name) {
          return new Promise((resolve, reject) => {
            var clip = this.audioClips[name];

            if (clip) {
              resolve(clip);
              return;
            }

            this.loadAudio(name, clip => {
              resolve(clip);
            });
          });
        }

      };
      // 单例
      AudioManager._instance = void 0;

      _export("audioManager", audioManager = AudioManager.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d4250d28a2b51ddaacf745e85361dad6420f12e1.js.map