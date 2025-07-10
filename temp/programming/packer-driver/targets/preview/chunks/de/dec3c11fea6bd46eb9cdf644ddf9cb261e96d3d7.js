System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _class2, _crd, ccclass, property, Tool_Console, ConsoleStyles;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0d06dqWnzdKhq8CmpadGehI", "Tool_Console", undefined);

      __checkObsolete__(['_decorator', 'color', 'Color', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Tool_Console", Tool_Console = (_dec = ccclass('Tool_Console'), _dec(_class = (_class2 = class Tool_Console extends Component {
        /**
         * 控制台样式打印函数
         * @param content 要打印的内容，可以是文本或对象
         * @param Options 样式配置选项对象
         * @param level 日志级别，默认为'log'，可选值：'log' | 'debug' | 'info' | 'warn' | 'error'
         * @example
            Tool_Console.instance.Console_Style(`文本内容:0.123456789+-`, {
                Font_Color: 'rgba(255, 99, 71, 1)',
                Font_Size: '20px',
                Font_Weight: 'lighter',
                Font_Style: 'normal',
                Font_Family: "'fantasy',cursive",
                Text_Decoration: 'none',
                Text_Shadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
                Background_Color: 'rgba(155, 155, 155, 0.2)',
                Padding: "10px 20px",
                Margin: "10px auto",
                Border:"1px dashed rgba(0, 255, 0, 1)",
                Border_Radius:"5px",
            });
         * @颜色配置
         * - 支持所有CSS颜色格式
         * @番茄红 （醒目警告）
         * @颜色名称: 'tomato'
         * @十六进制: '#FF6347'
         * @RGB格式: 'rgb(255, 99, 71)'
         * @RGBA格式: 'rgba(255, 99, 71, 1)'
         * @浅海蓝 （清爽链接）
         * @颜色名称: 'lightskyblue'
         * @十六进制: '#87CEFA'
         * @RGB格式: 'rgb(135, 206, 250)'
         * @RGBA格式: 'rgba(135, 206, 250, 0.8)'
         * @蜜橙 （活力强调）
         * @颜色名称: 'darkorange'
         * @十六进制: '#FF8C00'
         * @RGB格式: 'rgb(255, 140, 0)'
         * @RGBA格式: 'rgba(255, 140, 0, 0.9)'
         * @石板灰 （中性文字）
         * @颜色名称: 'slategray'
         * @十六进制: '#708090'
         * @RGB格式: 'rgb(112, 128, 144)'
         * @RGBA格式: 'rgba(112, 128, 144, 0.7)'
         * @玫粉色 （女性向设计）
         * @颜色名称: 'hotpink'
         * @十六进制: '#FF69B4'
         * @RGB格式: 'rgb(255, 105, 180)'
         * @RGBA格式: 'rgba(255, 105, 180, 0.6)'      
         * @松绿色 （自然主题）
         * @颜色名称: 'mediumseagreen'
         * @十六进制: '#3CB371'
         * @RGB格式: 'rgb(60, 179, 113)'
         * @RGBA格式: 'rgba(60, 179, 113, 0.8)'
         * @薰衣草紫 （柔和背景）
         * @颜色名称: 'lavender'
         * @十六进制: '#E6E6FA'
         * @RGB格式: 'rgb(230, 230, 250)'
         * @RGBA格式: 'rgba(230, 230, 250, 0.5)'
         * @巧克力棕 （复古风格）
         * @颜色名称: 'chocolate'
         * @十六进制: '#D2691E'
         * @RGB格式: 'rgb(210, 105, 30)'
         * @RGBA格式: 'rgba(210, 105, 30, 0.7)'
         * @珊瑚橙
         * @颜色名称: 'coral'
         * @十六进制: '#FF7F50'
         * @RGB格式: 'rgb(255, 127, 80)'
         * @RGBA格式: 'rgba(255, 127, 80, 1)'
         * @薄荷绿
         * @颜色名称: 'mediumaquamarine'
         * @十六进制: '#66CDAA'
         * @RGB格式: 'rgb(102, 205, 170)'
         * @RGBA格式: 'rgba(102, 205, 170, 1)'
         * @矢车菊蓝
         * @颜色名称: 'cornflowerblue'
         * @十六进制: '#6495ED'
         * @RGB格式: 'rgb(100, 149, 237)'
         * @RGBA格式: 'rgba(100, 149, 237, 1)'
         * @金盏黄
         * @颜色名称: 'gold'
         * @十六进制: '#FFD700'
         * @RGB格式: 'rgb(255, 215, 0)'
         * @RGBA格式: 'rgba(255, 215, 0, 1)'
         * @紫水晶
         * @颜色名称: 'mediumorchid'
         * @十六进制: '#BA55D3'
         * @RGB格式: 'rgb(186, 85, 211)'
         * @RGBA格式: 'rgba(186, 85, 211, 1)'
        */
        Console_Style(Content, Options, // 默认值为空对象
        Log_Level // 默认日志级别为log
        ) {
          if (Options === void 0) {
            Options = {};
          }

          if (Log_Level === void 0) {
            Log_Level = 'log';
          }

          // 初始化样式字符串
          var style = ''; // ========== 文本样式处理 ==========
          // 如果设置了颜色，添加到样式字符串

          if (Options.Font_Color) style += "color: " + Options.Font_Color + "; "; // 如果设置了字体大小，添加到样式字符串

          if (Options.Font_Size) style += "font-size: " + Options.Font_Size + "; "; // 如果设置了字体粗细，添加到样式字符串

          if (Options.Font_Weight) style += "font-weight: " + Options.Font_Weight + "; "; // 如果设置了字体样式，添加到样式字符串

          if (Options.Font_Style) style += "font-style: " + Options.Font_Style + "; "; // 如果设置了字体族，添加到样式字符串

          if (Options.Font_Family) style += "font-family: " + Options.Font_Family + ";  "; // 如果设置了文本装饰，添加到样式字符串

          if (Options.Text_Decoration) style += "text-decoration: " + Options.Text_Decoration + "; "; // 如果设置了文字阴影，添加到样式字符串

          if (Options.Text_Shadow) style += "text-shadow: " + Options.Text_Shadow + "; "; // ========== 背景和边框处理 ==========
          // 如果设置了背景颜色，添加到样式字符串

          if (Options.Background_Color) style += "background-color: " + Options.Background_Color + "; "; // 如果设置了内边距，添加到样式字符串

          if (Options.Padding) style += "padding: " + Options.Padding + "; "; // 如果设置了外边距，添加到样式字符串

          if (Options.Margin) style += "margin: " + Options.Margin + "; "; // 如果设置了边框，添加到样式字符串

          if (Options.Border) style += "border: " + Options.Border + "; "; // 如果设置了边框圆角，添加到样式字符串

          if (Options.Border_Radius) style += "border-radius: " + Options.Border_Radius + "; "; // ========== 内容类型处理 ==========

          if (typeof Content === 'object') {
            // 如果内容是对象：
            // 1. 先打印带样式的"Object:"标签
            // 2. 然后打印实际对象内容
            console[Log_Level]('%cObject:', style);
            console[Log_Level](Content);
          } else {
            // 如果内容是文本：
            // 确保Content是字符串，并且正确应用样式
            var Str_Content = String(Content);
            console[Log_Level]('%c' + Str_Content, style);
          }
        }

      }, _class2.instance = new _class2(), _class2)) || _class)); // 更新预设样式配置（增加阴影效果）


      _export("ConsoleStyles", ConsoleStyles = {
        error: {
          color: 'white',
          backgroundColor: '#ff4d4f',
          padding: '2px 8px',
          borderRadius: '4px',
          fontWeight: 'bold',
          boxShadow: '0 2px 8px rgba(255, 77, 79, 0.3)'
        },
        warning: {
          color: '#faad14',
          backgroundColor: '#fffbe6',
          padding: '2px 8px',
          border: '1px solid #ffe58f',
          fontWeight: 'bold',
          textShadow: '1px 1px 2px rgba(250, 173, 20, 0.3)'
        },
        success: {
          color: '#52c41a',
          backgroundColor: '#f6ffed',
          padding: '2px 8px',
          border: '1px solid #b7eb8f',
          boxShadow: '0 2px 8px rgba(82, 196, 26, 0.2)'
        },
        info: {
          color: '#1890ff',
          backgroundColor: '#e6f7ff',
          padding: '2px 8px',
          border: '1px solid #91d5ff',
          boxShadow: '0 2px 8px rgba(24, 144, 255, 0.2)'
        },
        title: {
          color: 'white',
          backgroundColor: '#722ed1',
          padding: '4px 12px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '4px',
          boxShadow: '0 4px 12px rgba(114, 46, 209, 0.3)',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
        },
        neon: {
          color: '#0ff',
          fontWeight: 'bold',
          // 明确指定类型
          textShadow: '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff',
          animation: 'neonGlow 1.5s ease-in-out infinite alternate',
          customStyle: "\n          @keyframes neonGlow {\n            from { text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff; }\n            to { text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff; }\n          }\n        "
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dec3c11fea6bd46eb9cdf644ddf9cb261e96d3d7.js.map