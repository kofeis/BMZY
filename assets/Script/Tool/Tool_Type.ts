import { _decorator, Component, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Tool_Type')
export class Tool_Type extends Component {

    public static readonly instance = new Tool_Type();

    /**
     * 判断值类型是否异常
     * @param Value 任意值
     * @returns true 正常，false 异常
     * @example
     * Tool_Type.instance.Get_Type_Is_Abnormal(null); // false
     * Tool_Type.instance.Get_Type_Is_Abnormal("T"); // true
     */
    Is_Abnormal(Value: any): boolean {
        // null、undefined、NaN
        if (Value == null) {
            console.debug("类型异常: 值为null或undefined");
            return false;
        }
        if (typeof Value === 'number' && isNaN(Value)) {
            console.debug("类型异常: 值为NaN");
            return false;
        }
        // 空字符串
        if (typeof Value === 'string' && Value.trim() === "") {
            console.debug("类型异常: 空字符串");
            return false;
        }
        // 空数组
        if (Array.isArray(Value) && Value.length === 0) {
            console.debug("类型异常: 空数组");
            return false;
        }
        // 空对象（非数组、非null）
        if (typeof Value === 'object' && !Array.isArray(Value) && Object.keys(Value).length === 0) {
            console.debug("类型异常: 空对象");
            return false;
        }
        // 其他类型（如函数、布尔值、非空对象/数组/字符串/数字）视为正常
        return true;
    }

    /**
     * 获取变量详细类型字符串（支持 array、function、map、set、date、regexp、symbol、bigint、null、undefined 等）
     * @param Value 任意值
     * @returns string
     * @example
     * Tool_Type.Get_Detail_Type([]); // "array"
     * Tool_Type.Get_Detail_Type(new Map()); // "map"
     * Tool_Type.Get_Detail_Type(() => {}); // "function"
     * Tool_Type.Get_Detail_Type(null); // "null"
     * Tool_Type.Get_Detail_Type(undefined); // "undefined"
     * Tool_Type.Get_Detail_Type(123); // "number"
     */
    public static Get_Detail_Type(Value: any): string {
        if (Value === null) return 'null';
        if (Value === undefined) return 'undefined';
        if (Array.isArray(Value)) return 'array';
        if (Value instanceof Map) return 'map';
        if (Value instanceof Set) return 'set';
        if (Value instanceof Date) return 'date';
        if (Value instanceof RegExp) return 'regexp';
        if (typeof Value === 'function') return 'function';
        if (typeof Value === 'symbol') return 'symbol';
        if (typeof Value === 'bigint') return 'bigint';
        return typeof Value;
    }

    /**
     * 获取一个空数组实例
     * @returns []
     */
    public static Get_Empty_Array(): any[] {
        return [];
    }

    /**
     * 获取一个空对象实例
     * @returns {}
     */
    public static Get_Empty_Object(): object {
        return {};
    }

    /**
     * 获取一个空函数实例
     * @returns () => void
     */
    public static Get_Empty_Function(): () => void {
        return () => { };
    }

    /**
     * 获取一个空 Map 实例
     * @returns Map<any, any>
     */
    public static Get_Empty_Map(): Map<any, any> {
        return new Map();
    }

    /**
     * 获取一个空 Set 实例
     * @returns Set<any>
     */
    public static Get_Empty_Set(): Set<any> {
        return new Set();
    }

    /**
     * 判断是否为数字（不包含NaN）
     * @param Value 任意值
     * @returns boolean
     * @example
     * Tool_Type.Is_Number(123); // true
     * Tool_Type.Is_Number("123"); // false
     */
    public static Is_Number(Value: any): boolean {
        return typeof Value === 'number' && !isNaN(Value);
    }

    /**
     * 判断是否为字符串
     * @param Value 任意值
     * @returns boolean
     * @example
     * Tool_Type.Is_String("abc"); // true
     * Tool_Type.Is_String(123); // false
     */
    public static Is_String(Value: any): boolean {
        return typeof Value === 'string';
    }

    /**
     * 判断是否为布尔值
     * @param Value 任意值
     * @returns boolean
     * @example
     * Tool_Type.Is_Boolean(true); // true
     * Tool_Type.Is_Boolean("true"); // false
     */
    public static Is_Boolean(Value: any): boolean {
        return typeof Value === 'boolean';
    }

    /**
     * 判断是否为函数
     * @param Value 任意值
     * @returns boolean
     * @example
     * Tool_Type.Is_Function(() => {}); // true
     * Tool_Type.Is_Function("T"); // false
     */
    public static Is_Function(Value: any): boolean {
        return typeof Value === 'function';
    }

    /**
     * 判断是否为数组
     * @param Value 任意值
     * @returns boolean
     * @example
     * Tool_Type.Is_Array([1,2,3]); // true
     * Tool_Type.Is_Array("123"); // false
     */
    public static Is_Array(Value: any): boolean {
        return Array.isArray(Value);
    }

    /**
     * 判断是否为纯对象（不包括数组和null）
     * @param Value 任意值
     * @returns boolean
     * @example
     * Tool_Type.Is_Plain_Object({a:1}); // true
     * Tool_Type.Is_Plain_Object([1,2]); // false
     */
    public static Is_Plain_Object(Value: any): boolean {
        return Object.prototype.toString.call(Value) === '[object Object]';
    }

    /**
     * 判断是否为null或undefined
     * @param Value 任意值
     * @returns boolean
     * @example
     * Tool_Type.Is_Nil(null); // true
     * Tool_Type.Is_Nil(undefined); // true
     * Tool_Type.Is_Nil(0); // false
     */
    public static Is_Nil(Value: any): boolean {
        return Value === null || Value === undefined;
    }

    /**
     * 判断是否为Promise
     * @param Value 任意值
     * @returns boolean
     * @example
     * Tool_Type.Is_Promise(Promise.resolve()); // true
     * Tool_Type.Is_Promise({}); // false
     */
    public static Is_Promise(Value: any): boolean {
        return !!Value && (typeof Value === 'object' || typeof Value === 'function') && typeof Value.then === 'function';
    }

    /**
     * 判断是否为日期对象
     * @param Value 任意值
     * @returns boolean
     * @example
     * Tool_Type.Is_Date(new Date()); // true
     * Tool_Type.Is_Date("2024-01-01"); // false
     */
    public static Is_Date(Value: any): boolean {
        return Object.prototype.toString.call(Value) === '[object Date]';
    }

    /**
     * 判断是否为正则表达式
     * @param Value 任意值
     * @returns boolean
     * @example
     * Tool_Type.Is_Reg_Exp(/T/); // true
     * Tool_Type.Is_Reg_Exp("T"); // false
     */
    public static Is_Reg_Exp(Value: any): boolean {
        return Object.prototype.toString.call(Value) === '[object RegExp]';
    }

    /**
     * 判断是否为空对象
     * @param Value 任意值
     * @returns boolean
     * @example
     * Tool_Type.Is_Empty_Object({}); // true
     * Tool_Type.Is_Empty_Object({T:0}); // false
     */
    public static Is_Empty_Object(Value: any): boolean {
        return this.Is_Plain_Object(Value) && Object.keys(Value).length === 0;
    }

    /**
     * 判断是否为空数组
     * @param Value 任意值
     * @returns boolean
     * @example
     * Tool_Type.Is_Empty_Array([]); // true
     * Tool_Type.Is_Empty_Array([0]); // false
     */
    public static Is_Empty_Array(Value: any): boolean {
        return Array.isArray(Value) && Value.length === 0;
    }

    /**
     * 判断是否为有效JSON字符串
     * @param Value 任意值
     * @returns boolean
     * @example
     * Tool_Type.Is_JSON_String('{"T":0}'); // true
     * Tool_Type.Is_JSON_String('T'); // false
     */
    public static Is_JSON_String(Value: any): boolean {
        if (typeof Value !== 'string') return false;
        try {
            const Obj = JSON.parse(Value);
            return typeof Obj === 'object' && Obj !== null;
        } catch {
            return false;
        }
    }

    /**
     * 类型安全转换为数字，失败返回默认值
     * @param Value 任意值
     * @param Default_Value 转换失败时返回的默认值，默认0
     * @returns number
     * @example
     * Tool_Type.To_Number("0"); // 0
     * Tool_Type.To_Number("T", 8); // 8
     */
    public static To_Number(Value: any, Default_Value: number = 0): number {
        const N = Number(Value);
        return isNaN(N) ? Default_Value : N;
    }

    /**
     * 类型安全转换为布尔值
     * @param Value 任意值
     * @returns boolean
     * @example
     * Tool_Type.To_Boolean("true"); // true
     * Tool_Type.To_Boolean(0); // false
     */
    public static To_Boolean(Value: any): boolean {
        if (typeof Value === 'string') {
            return Value.toLowerCase() === 'true' || Value === '1';
        }
        return Boolean(Value);
    }

    /**
     * 类型安全转换为字符串
     * @param Value 任意值
     * @param Default_Value 转换失败时返回的默认值，默认''
     * @returns string
     * @example
     * Tool_Type.To_String(0); // "0"
     * Tool_Type.To_String(null, "default"); // "default"
     */
    public static To_String(Value: any, Default_Value: string = ''): string {
        if (Value == null) return Default_Value;
        return String(Value);
    }

    /**
     * 获取变量类型字符串（更详细）
     * @param Value 任意值
     * @returns string
     * @example
     * Tool_Type.Get_Type([]); // "array"
     * Tool_Type.Get_Type(null); // "null"
     * Tool_Type.Get_Type(123); // "number"
     */
    public static Get_Type(Value: any): string {
        if (Value === null) return 'null';
        if (Array.isArray(Value)) return 'array';
        return typeof Value;
    }

    /**
     * 安全地检查对象是否拥有指定的自身属性（非继承属性）
     * @param Object_Value - 要检查的目标对象
     * @param Key - 要检查的属性名
     * @returns 如果对象自身包含该属性则返回 true，否则返回 false
     * 
     * @example
     * const obj = { name: 'Alice' };
     * 
     * // 检查自身属性
     * Has_Own(obj, 'name');  // true
     * 
     * // 检查继承属性
     * Has_Own(obj, 'toString');  // false
     * 
     * // 检查不存在的属性
     * Has_Own(obj, 'age');  // false
     */
    public static Has_Own(Object_Value: object, Key: string): boolean {
        return Object.prototype.hasOwnProperty.call(Object_Value, Key);
    }

    /**
     * 检查对象是否为某个构造函数的实例
     * @param Object_Value - 要检查的目标对象
     * @param Constructor - 用于检查的构造函数
     * @returns 如果对象是该构造函数的实例则返回 true，否则返回 false
     * 
     * @example
     * class Person {}
     * const P = new Person();
     * 
     * // 检查实例关系
     * Is_Instance_Of(p, Person);  // true
     * 
     * // 检查数组
     * Is_Instance_Of([], Array);  // true
     * 
     * // 检查原生对象
     * Is_Instance_Of({}, Object);  // true
     */
    public static Is_Instance_Of(Object_Value: any, Constructor: Function): boolean {
        // instanceof 操作符会检查对象的原型链
        return Object_Value instanceof Constructor;
    }


}


