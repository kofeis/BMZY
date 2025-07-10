import { _decorator, color, Color, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Tool_Console')
export class Tool_Console extends Component {

    public static readonly instance = new Tool_Console();

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
    Console_Style(
        Content: any,
        Options: {
            /**字体颜色 */
            Font_Color?: string;
            /**
             * @字体大小
             * @Example '0px'
             * @Example '0em'
             */
            Font_Size?: string;
            /**字体粗细，可以是关键字或数字(100-900) */
            Font_Weight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
            /**字体样式，如斜体等 */
            Font_Style?: 'normal' | 'italic' | 'oblique';
            /**字体族，如'Arial', 'Microsoft YaHei'等 */
            /**
            * @简体中文 
            * @Example "'fantasy',cursive"
            * @Example 'SimSun'      // 宋体（Windows默认）
            * @Example 'NSimSun'     // 新宋体
            * @Example 'Microsoft YaHei'  // 微软雅黑（Win默认无衬线）
            * @Example 'PingFang SC' // 苹方-简（macOS/iOS）
            * @Example 'Hiragino Sans GB' // 冬青黑体简（macOS）
            * @Example 'STKaiti'     // 华文楷体
            * @Example 'STXihei'     // 华文细黑
            * @Example 'STSong'      // 华文宋体
            * @繁体中文
            * @Example 'PMingLiU'    // 新细明体（繁体）
            * @Example 'MingLiU'     // 细明体（繁体）
            * @无衬线字体
            * @Example 'Arial'
            * @Example 'Helvetica'
            * @Example 'Verdana'
            * @Example 'Segoe UI'  // Windows现代界面字体
            * @Example 'Roboto'    // Android/Google系字体
            * @衬线字体
            * @Example 'Times New Roman'
            * @Example 'Georgia'
            * @Example 'Garamond'
            * @等宽字体 (代码专用)
            * @Example 'Courier New'
            * @Example 'Consolas'
            * @Example 'Menlo'
            * @Example 'Source Code Pro'
             */
            Font_Family?: string;
            /**
             * 文字阴影效果配置
             * 格式: "X偏移 Y偏移 模糊半径 颜色"
             * @Example "0px 0px 0px rgba(0, 0, 0, 0.5)"
             */
            Text_Shadow?: string;
            /**
             * 文本装饰线样式配置
             * - 'none':       默认值，无任何装饰线
             * - 'underline':  在文本下方添加装饰线（下划线）
             * - 'overline':   在文本上方添加装饰线（上划线）
             * - 'line-through': 在文本中间添加装饰线（删除线）
             */
            Text_Decoration?: 'none' | 'underline' | 'overline' | 'line-through';
            /**背景颜色 */
            Background_Color?: string;
            /**
              * 内边距，支持CSS padding语法
              * @Example "10px"                  // 上下左右均为10px
              * @Example "10px 20px"             // 上下10px，左右20px
              * @Example "5px 10px 15px 20px"    // 上5px，右10px，下15px，左20px
              * @Example "1em 2em"               // 使用em单位
            */
            Padding?: string;
            /**
             * 外边距，支持CSS margin语法
             * @Example "10px"                  // 上下左右均为10px
             * @Example "10px auto"             // 上下10px，左右自动居中
             * @Example "5px 10px 15px 0px"       // 上5px，右10px，下15px，左0
             * @Example "2rem 3rem"             // 使用rem单位
            */
            Margin?: string;
            /**
             * 边框，支持CSS border语法
             * @Example "1px solid black"       // 1像素黑色实线边框
             * @Example "2px dotted #ff0000"    // 2像素红色虚线边框
             * @Example "3px dashed rgba(0,0,0,0.5)" // 3像素半透明黑色虚线边框
             * @Example "thin double green"     // 细双线绿色边框
            */
            Border?: string;
            /**
             * 边框圆角，支持CSS border-radius语法
             * @Example "5px"                   // 所有角5px圆角
             * @Example "10px 5px"              // 左上右下10px，右上左下5px
             * @Example "5px 10px 15px 20px"    // 左上5px，右上10px，右下15px，左下20px
             * @Example "50%"                   // 圆形/椭圆形
            */
            Border_Radius?: string;
        } = {}, // 默认值为空对象
        Log_Level: 'log' | 'debug' | 'info' | 'warn' | 'error' = 'log' // 默认日志级别为log
    ) {
        // 初始化样式字符串
        let style = '';
        // ========== 文本样式处理 ==========
        // 如果设置了颜色，添加到样式字符串
        if (Options.Font_Color) style += `color: ${Options.Font_Color}; `;
        // 如果设置了字体大小，添加到样式字符串
        if (Options.Font_Size) style += `font-size: ${Options.Font_Size}; `;
        // 如果设置了字体粗细，添加到样式字符串
        if (Options.Font_Weight) style += `font-weight: ${Options.Font_Weight}; `;
        // 如果设置了字体样式，添加到样式字符串
        if (Options.Font_Style) style += `font-style: ${Options.Font_Style}; `;
        // 如果设置了字体族，添加到样式字符串
        if (Options.Font_Family) style += `font-family: ${Options.Font_Family};  `;
        // 如果设置了文本装饰，添加到样式字符串
        if (Options.Text_Decoration) style += `text-decoration: ${Options.Text_Decoration}; `;
        // 如果设置了文字阴影，添加到样式字符串
        if (Options.Text_Shadow) style += `text-shadow: ${Options.Text_Shadow}; `;
        // ========== 背景和边框处理 ==========
        // 如果设置了背景颜色，添加到样式字符串
        if (Options.Background_Color) style += `background-color: ${Options.Background_Color}; `;
        // 如果设置了内边距，添加到样式字符串
        if (Options.Padding) style += `padding: ${Options.Padding}; `;
        // 如果设置了外边距，添加到样式字符串
        if (Options.Margin) style += `margin: ${Options.Margin}; `;
        // 如果设置了边框，添加到样式字符串
        if (Options.Border) style += `border: ${Options.Border}; `;
        // 如果设置了边框圆角，添加到样式字符串
        if (Options.Border_Radius) style += `border-radius: ${Options.Border_Radius}; `;
        // ========== 内容类型处理 ==========
        if (typeof Content === 'object') {
            // 如果内容是对象：
            // 1. 先打印带样式的"Object:"标签
            // 2. 然后打印实际对象内容
            console[Log_Level]('%cObject:', style);
            console[Log_Level](Content);
        } else {
            // 如果内容是文本：
            // 确保Content是字符串，并且正确应用样式
            const Str_Content = String(Content);
            console[Log_Level]('%c' + Str_Content, style);
        }
    }
}



// 更新预设样式配置（增加阴影效果）
export const ConsoleStyles = {
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
        fontWeight: 'bold' as FontWeight,  // 明确指定类型
        textShadow: '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff',
        animation: 'neonGlow 1.5s ease-in-out infinite alternate',
        customStyle: `
          @keyframes neonGlow {
            from { text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff; }
            to { text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff; }
          }
        `
    }
};

type FontWeight = number | 'normal' | 'bold' | 'bolder' | 'lighter' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';


