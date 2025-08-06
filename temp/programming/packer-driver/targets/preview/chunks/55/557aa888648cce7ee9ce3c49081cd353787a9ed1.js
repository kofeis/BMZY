System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Tool_Console, _class, _crd, ConsoleStylePreset, ConsoleStyles;

  _export("Tool_Console", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0d06dqWnzdKhq8CmpadGehI", "Tool_Console", undefined);

      "Tool_Console";

      _export("Tool_Console", Tool_Console = class Tool_Console {
        /**
         * 控制台样式打印函数
         * @param Content 要打印的内容
         * @param Data 要打印的数据
         * @param Options_Type 预设样式配置
         * @param Log_Level 日志级别 
         * @example
            Tool_Console.instance.Console_Style
         * @颜色配置
         * - 支持所有CSS颜色格式
         * @番茄红 （醒目警告）
         * @颜色名称: "tomato"
         * @十六进制: "#FF6347"
         * @RGB格式: "rgb(255, 99, 71)"
         * @RGBA格式: "rgba(255, 99, 71, 1)"
         * @浅海蓝 （清爽链接）
         * @颜色名称: "lightskyblue"
         * @十六进制: "#87CEFA"
         * @RGB格式: "rgb(135, 206, 250)"
         * @RGBA格式: "rgba(135, 206, 250, 0.8)"
         * @蜜橙 （活力强调）
         * @颜色名称: "darkorange"
         * @十六进制: "#FF8C00"
         * @RGB格式: "rgb(255, 140, 0)"
         * @RGBA格式: "rgba(255, 140, 0, 0.9)"
         * @石板灰 （中性文字）
         * @颜色名称: "slategray"
         * @十六进制: "#708090ff"
         * @RGB格式: "#708090ff"
         * @RGBA格式: "rgba(112, 128, 144, 0.7)"
         * @玫粉色 （女性向设计）
         * @颜色名称: "hotpink"
         * @十六进制: "#FF69B4"
         * @RGB格式: "rgb(255, 105, 180)"
         * @RGBA格式: "rgba(255, 105, 180, 0.6)"      
         * @松绿色 （自然主题）
         * @颜色名称: "mediumseagreen"
         * @十六进制: "#3CB371"
         * @RGB格式: "rgb(60, 179, 113)"
         * @RGBA格式: "rgba(60, 179, 113, 0.8)"
         * @薰衣草紫 （柔和背景）
         * @颜色名称: "lavender"
         * @十六进制: "#E6E6FA"
         * @RGB格式: "rgb(230, 230, 250)"
         * @RGBA格式: "rgba(230, 230, 250, 0.5)"
         * @巧克力棕 （复古风格）
         * @颜色名称: "chocolate"
         * @十六进制: "#D2691E"
         * @RGB格式: "rgb(210, 105, 30)"
         * @RGBA格式: "rgba(210, 105, 30, 0.7)"
         * @珊瑚橙
         * @颜色名称: "coral"
         * @十六进制: "#FF7F50"
         * @RGB格式: "rgb(255, 127, 80)"
         * @RGBA格式: "rgba(255, 127, 80, 1)"
         * @薄荷绿
         * @颜色名称: "mediumaquamarine"
         * @十六进制: "#66CDAA"
         * @RGB格式: "rgb(102, 205, 170)"
         * @RGBA格式: "rgba(102, 205, 170, 1)"
         * @矢车菊蓝
         * @颜色名称: "cornflowerblue"
         * @十六进制: "#6495ED"
         * @RGB格式: "rgb(100, 149, 237)"
         * @RGBA格式: "rgba(100, 149, 237, 1)"
         * @金盏黄
         * @颜色名称: "gold"
         * @十六进制: "#FFD700"
         * @RGB格式: "rgb(255, 215, 0)"
         * @RGBA格式: "rgba(255, 215, 0, 1)"
         * @紫水晶
         * @颜色名称: "mediumorchid"
         * @十六进制: "#BA55D3"
         * @RGB格式: "rgb(186, 85, 211)"
         * @RGBA格式: "rgba(186, 85, 211, 1)"
        */
        Console_Style(Content, Options_Type, Log_Level) {
          if (Options_Type === void 0) {
            Options_Type = "DEBUG";
          }

          if (Log_Level === void 0) {
            Log_Level = "debug";
          }

          // return;
          var Options_Style = ConsoleStyles[Options_Type]; // 初始化样式字符串

          var Style = ""; // ========== 文本样式处理 ==========
          // 如果设置了颜色，添加到样式字符串

          if (Options_Style.Font_Color) Style += "color: " + Options_Style.Font_Color + "; "; // 如果设置了字体大小，添加到样式字符串

          if (Options_Style.Font_Size) Style += "font-size: " + Options_Style.Font_Size + "; "; // 如果设置了字体粗细，添加到样式字符串

          if (Options_Style.Font_Weight) Style += "font-weight: " + Options_Style.Font_Weight + "; "; // 如果设置了字体样式，添加到样式字符串

          if (Options_Style.Font_Style) Style += "font-style: " + Options_Style.Font_Style + "; "; // 如果设置了字体族，添加到样式字符串

          if (Options_Style.Font_Family) Style += "font-family: " + Options_Style.Font_Family + ";  "; // 如果设置了文本装饰，添加到样式字符串

          if (Options_Style.Text_Decoration) Style += "text-decoration: " + Options_Style.Text_Decoration + "; "; // 如果设置了文字阴影，添加到样式字符串

          if (Options_Style.Text_Shadow) Style += "text-shadow: " + Options_Style.Text_Shadow + "; "; // ========== 背景和边框处理 ==========
          // 如果设置了背景颜色，添加到样式字符串

          if (Options_Style.Background_Color) Style += "background-color: " + Options_Style.Background_Color + "; "; // 如果设置了内边距，添加到样式字符串

          if (Options_Style.Padding) Style += "padding: " + Options_Style.Padding + "; "; // 如果设置了外边距，添加到样式字符串

          if (Options_Style.Margin) Style += "margin: " + Options_Style.Margin + "; "; // 如果设置了边框，添加到样式字符串

          if (Options_Style.Border) Style += "border: " + Options_Style.Border + "; "; // 如果设置了边框圆角，添加到样式字符串

          if (Options_Style.Border_Radius) Style += "border-radius: " + Options_Style.Border_Radius + "; "; // ========== 内容类型处理 ==========
          // 内容是文本
          // 确保Content是字符串，并且正确应用样式

          var Str_Content = String(Content);
          console[Log_Level]("%c" + ("\u20B0" + Options_Type) + " " + Str_Content, Style, "\n", "\u21AA\u20AF " + new Date().toLocaleString() + "\n", Data);
        }

      });

      _class = Tool_Console;
      Tool_Console.instance = new _class();

      _export("ConsoleStylePreset", ConsoleStylePreset = /*#__PURE__*/function (ConsoleStylePreset) {
        ConsoleStylePreset["SUCCESS"] = "SUCCESS";
        ConsoleStylePreset["WARNING"] = "WARNING";
        ConsoleStylePreset["ERROR"] = "ERROR";
        ConsoleStylePreset["INFO"] = "INFO";
        ConsoleStylePreset["DEBUG"] = "DEBUG";
        ConsoleStylePreset["BUTTON"] = "BUTTON";
        ConsoleStylePreset["NETWORK"] = "NETWORK";
        ConsoleStylePreset["ANIMATION"] = "ANIMATION";
        return ConsoleStylePreset;
      }({}));

      _export("ConsoleStyles", ConsoleStyles = {
        [ConsoleStylePreset.SUCCESS]: {
          Font_Color: "#2e7d32",
          // 深绿色
          Font_Size: "14px",
          Font_Weight: "bold",
          Font_Style: "normal",
          Font_Family: "Segoe UI, Arial, sans-serif",
          Text_Decoration: "none",
          Text_Shadow: "1px 1px 2px rgba(0, 0, 0, 0.05)",
          Background_Color: "#e8f5e9",
          // 绿色背景
          Padding: "10px 16px",
          Margin: "6px 0",
          Border: "1px solid #66bb6a",
          Border_Radius: "6px"
        },
        [ConsoleStylePreset.INFO]: {
          Font_Color: "#0277bd",
          // 蓝色
          Font_Size: "14px",
          Font_Weight: "normal",
          Font_Style: "normal",
          Font_Family: "Segoe UI, Arial, sans-serif",
          Text_Decoration: "none",
          Text_Shadow: "1px 1px 2px rgba(0, 0, 0, 0.05)",
          Background_Color: "#e3f2fd",
          // 蓝色背景
          Padding: "10px 16px",
          Margin: "6px 0",
          Border: "1px solid #29b6f6",
          Border_Radius: "6px"
        },
        [ConsoleStylePreset.WARNING]: {
          Font_Color: "#f57f17",
          // 深橙黄色
          Font_Size: "14px",
          Font_Weight: "bold",
          Font_Style: "normal",
          Font_Family: "Segoe UI, Arial, sans-serif",
          Text_Decoration: "none",
          Text_Shadow: "1px 1px 2px rgba(0, 0, 0, 0.05)",
          Background_Color: "#fffde7",
          // 黄色背景
          Padding: "10px 16px",
          Margin: "6px 0",
          Border: "1px solid #fbc02d",
          Border_Radius: "6px"
        },
        [ConsoleStylePreset.ERROR]: {
          Font_Color: "#c62828",
          // 深红色
          Font_Size: "14px",
          Font_Weight: "bold",
          Font_Style: "normal",
          Font_Family: "Segoe UI, Arial, sans-serif",
          Text_Decoration: "none",
          Text_Shadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
          Background_Color: "#ffebee",
          // 红色背景
          Padding: "10px 16px",
          Margin: "6px 0",
          Border: "1px solid #ef5350",
          Border_Radius: "6px"
        },
        [ConsoleStylePreset.DEBUG]: {
          Font_Color: "#6a1b9a",
          // 紫色
          Font_Size: "13px",
          Font_Weight: "normal",
          Font_Style: "normal",
          Font_Family: "Segoe UI",
          Text_Decoration: "none",
          Text_Shadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
          Background_Color: "#f3e5f5",
          // 淡紫背景
          Padding: "10px 16px",
          Margin: "6px 0",
          Border: "1px solid #ba68c8",
          Border_Radius: "6px"
        },
        [ConsoleStylePreset.BUTTON]: {
          Font_Color: "#5d4037",
          // 深棕色文字
          Font_Size: "13px",
          Font_Weight: "normal",
          Font_Style: "normal",
          Font_Family: "Consolas, 'Courier New', monospace",
          Text_Decoration: "none",
          Background_Color: "#f5f5f5",
          // 浅灰背景
          Padding: "8px 12px",
          Margin: "4px 0",
          Border: "1px solid #e0e0e0",
          Border_Radius: "4px"
        },
        [ConsoleStylePreset.NETWORK]: {
          Font_Color: "#ffffff",
          // 白色文字
          Font_Size: "14px",
          Font_Weight: "bold",
          Font_Style: "normal",
          Font_Family: "Segoe UI, Arial, sans-serif",
          Text_Decoration: "none",
          Text_Shadow: "0px 1px 1px rgba(0, 0, 0, 0.2)",
          Background_Color: "#2196f3",
          // 蓝色背景
          Padding: "10px 20px",
          Margin: "6px 4px",
          Border: "none",
          Border_Radius: "4px"
        },
        [ConsoleStylePreset.ANIMATION]: {
          Font_Color: "#708090",
          Font_Size: "14px",
          Font_Weight: "bold",
          Font_Style: "normal",
          Font_Family: "'Segoe UI', Arial, sans-serif",
          Text_Decoration: "none",
          Text_Shadow: "0 1px 2px rgba(255, 255, 255, 0.3)",
          Background_Color: "#84a8caff",
          Padding: "10px 16px",
          Margin: "6px 0",
          Border: "1px solid #708090b3",
          Border_Radius: "6px"
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=557aa888648cce7ee9ce3c49081cd353787a9ed1.js.map