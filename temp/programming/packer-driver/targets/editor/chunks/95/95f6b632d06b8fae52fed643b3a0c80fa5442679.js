System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, v3, _dec, _class, _class2, _crd, ccclass, property, reg_phone, reg_email, reg_birthday, Tool_Other;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c35beL6onhAJrN0aUSdDrc4", "Tool_Other", undefined);

      __checkObsolete__(['_decorator', 'Component', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      reg_phone = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;
      reg_email = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
      reg_birthday = /^[0-9]{1,2}\/(0?[1-9]|1[12])\/(19|20)[0-9]{2}$/;

      _export("Tool_Other", Tool_Other = (_dec = ccclass('Tool_Other'), _dec(_class = (_class2 = class Tool_Other extends Component {
        /**验证手机号 */
        isPhone(str) {
          return reg_phone.test(str);
        }
        /**验证邮箱 */


        isEmail(str) {
          return reg_email.test(str);
        }
        /**验证生日是否正确 dd/mm/yyyy格式*/


        isBirthday(str) {
          if (!reg_birthday.test(str)) return false; //先简单匹配格式是否正确

          let a = str.split("/");

          let _d = parseInt(a[0]);

          let _m = parseInt(a[1]);

          let _y = parseInt(a[2]);

          let date = new Date();
          let cur_d = date.getDate();
          let cur_m = date.getMonth() + 1;
          let cur_y = date.getFullYear();
          if (_y > cur_y) return false; //计算是否是未来的时间

          if (_y == cur_y && _m > cur_m) return false;
          if (_y == cur_y && _m == cur_m && _d > cur_d) return false; //计算每月最大天数

          let maxDay = 31;

          if ([4, 6, 9, 11].indexOf(_m) > -1) {
            maxDay = 30;
          } else if (_m == 2) {
            //计算闰月
            if (_y % 100 == 0) {
              maxDay = _y % 400 == 0 ? 29 : 28;
            } else {
              maxDay = _y % 4 == 0 ? 29 : 28;
            }
          }

          if (_d > maxDay || _d <= 0) return false;
          return true;
        }
        /**获取类型是否异常
        *@true 正常
        *@false 异常
        */


        Get_Type_Is_Abnormal(Value) {
          // 检查 null 和 undefined
          if (Value === null || Value === undefined) {
            console.log("类型异常");
            return false;
          } // 检查 NaN


          if (typeof Value === 'number' && isNaN(Value)) {
            console.log("类型异常");
            return false;
          } // 检查空字符串、空对象和空数组


          if (Value === "" || typeof Value === 'object' && Object.keys(Value).length === 0) {
            console.log("类型异常");
            return false;
          } // 如果通过所有检查，返回 true，表示正常


          return true;
        }
        /**获取闭区间[Min,Max]内的随机数*/


        Get_Random_Int(Min, Max) {
          Min = Math.ceil(Min);
          Max = Math.floor(Max);
          return Math.floor(Math.random() * (Max - Min + 1)) + Min;
        }
        /** 获取闭区间 [Min, Max] 内的数组 Arr 外的随机数，如果不存在返回 -1；
         * @param Min 最小数
         * @param Max 最大数
         * @param Arr 数组
         * @example Get_Random_Int_Plus(0, 6, [1, 2, 3, 4]); // return 0/5/6
         */


        Get_Random_Int_Except(Min, Max, Arr) {
          // 将数组 Arr 转换为 Set，以便快速查找
          //排除
          const Numbers_Excluded = new Set(Arr); //可用

          const Numbers_Available = []; // 收集可用的数字

          for (let i = Min; i <= Max; i++) {
            if (!Numbers_Excluded.has(i)) {
              Numbers_Available.push(i);
            }
          } // 如果没有可用的数字，返回 -1


          if (Numbers_Available.length === 0) {
            return -1;
          } else {
            // 获取随机索引并返回对应的随机数
            const randomIndex = this.Get_Random_Int(0, Numbers_Available.length - 1);
            return Numbers_Available[randomIndex];
          }
        }
        /**
         * 获取一组不重复的随机数
         * @param Min 最小数（包含）
         * @param Max 最大数（包含）
         * @param Length 数组长度
         * @returns 不重复的随机数数组
         */


        Get_Random_Arr_Deduplication(Min, Max, Length) {
          // 参数校验
          if (Min > Max) {
            console.debug(`Min:${Min} 必须小于或等于 Max:${Max}`);
            return;
          } // 计算范围


          const Range = Max - Min + 1; // 确保 Length 不超过范围

          Length = Math.min(Length, Range); // 动态选择实现方式

          if (Range <= 1000 || Length <= Range * 0.1) {
            // 小范围或 Length 远小于范围时，使用 Set + while 循环
            return this.Get_Random_Arr_BySet(Min, Max, Length);
          } else {
            // 大范围且 Length 接近范围时，使用 Fisher-Yates 洗牌算法
            return this.Get_Random_Arr_ByShuffle(Min, Max, Length);
          }
        }
        /**
        * 使用 Set + while 循环生成随机数
        * @param Min 最小数
        * @param Max 最大数
        * @param Length 数组长度
        * @returns 不重复的随机数数组
        */


        Get_Random_Arr_BySet(Min, Max, Length) {
          const Result = new Set(); // 使用 Set 来避免重复

          while (Result.size < Length) {
            const Num_Random = this.Get_Random_Int(Min, Max);
            Result.add(Num_Random); // Set 会自动处理重复
          }

          return Array.from(Result); // 将 Set 转换为数组
        }
        /**
         * 使用 Fisher-Yates 洗牌算法生成随机数
         * @param Min 最小数
         * @param Max 最大数
         * @param Length 数组长度
         * @returns 不重复的随机数数组
         */


        Get_Random_Arr_ByShuffle(Min, Max, Length) {
          const All_Numbers = Array.from({
            length: Max - Min + 1
          }, (_, i) => i + Min);
          this.Sort_Random(All_Numbers); // 返回前 len 个元素

          return All_Numbers.slice(0, Length);
        }
        /**排序反向 */


        Sort_Reverse(Arr) {
          return Arr.reverse();
        }
        /**排序随机 (Fisher-Yates 洗牌算法) */


        Sort_Random(Arr) {
          for (let i = Arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [Arr[i], Arr[j]] = [Arr[j], Arr[i]];
          }

          return Arr;
        }
        /** 排序升序 */


        Sort_Ascending(Arr) {
          return Arr.sort((a, b) => a - b);
        }
        /** 降序排序 */


        Sort_Descending(Arr) {
          return Arr.sort((a, b) => b - a);
        }
        /** 按字符串长度排序 */


        Sort_ByStringLength(Arr) {
          return Arr.sort((a, b) => a.length - b.length);
        }
        /** 按对象属性排序 */
        // Sort_ByObjectProperty<T extends Record<string, any>>(Arr: T[], Key: keyof T, Reverse: boolean = false): T[] {
        //     return Arr.sort((a, b) => a[Key] - b[Key]);
        // }

        /**
         * 按对象属性排序
         * @param Arr 要排序的数组
         * @param Key 排序依据的属性名
         * @param Reverse 是否降序排列（默认false为升序）
         * @returns 排序后的新数组
         */


        Sort_ByObjectProperty(Arr, Key, Reverse = false) {
          return Arr.sort((a, b) => {
            const valueA = a[Key];
            const valueB = b[Key]; // 处理可能的undefined/null值

            if (valueA == null) return Reverse ? -1 : 1;
            if (valueB == null) return Reverse ? 1 : -1; // 数值比较

            if (typeof valueA === 'number' && typeof valueB === 'number') {
              return Reverse ? valueB - valueA : valueA - valueB;
            } // 字符串比较


            const strA = String(valueA);
            const strB = String(valueB);
            return Reverse ? strB.localeCompare(strA) : strA.localeCompare(strB);
          });
        }
        /** 按字母顺序排序 */


        Sort_Alphabetically(Arr) {
          return Arr.sort((a, b) => a.localeCompare(b));
        }
        /** 按日期排序 */


        Sort_ByDate(Arr) {
          return Arr.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
        }
        /** 计算数组的平均值 */


        Get_Array_Average(Arr) {
          const Sum = Arr.reduce((acc, val) => acc + val, 0);
          return Sum / Arr.length;
        }
        /**
         * 从数组中提取所有奇数
         * @param Arr 输入数组
         * @returns 包含所有奇数的新数组
         */


        Get_Numbers_Odd(Arr) {
          if (!Arr || Arr.length === 0) {
            return []; // 如果数组为空或未定义，直接返回空数组
          }

          return Arr.filter(num => num % 2 !== 0); // 过滤出奇数
        }
        /**
         * 从数组中提取所有偶数
         * @param Arr 输入数组
         * @returns 包含所有偶数的新数组
         */


        Get_Numbers_Even(Arr) {
          if (!Arr || Arr.length === 0) {
            return []; // 如果数组为空或未定义，直接返回空数组
          }

          return Arr.filter(num => num % 2 === 0); // 过滤出偶数
        }
        /** 获取 数组 去重 */


        Get_Arr_Unique(Arr) {
          return Array.from(new Set(Arr));
        }
        /** 获取 数组 合并 去重 */


        Get_Arr_Merge_Unique(Arr1, Arr2) {
          return Array.from(new Set([...Arr1, ...Arr2]));
        }
        /** 获取 数组 中 每个元素 的 出现频率 */


        Get_Arr_Element_Frequency(Arr) {
          const frequency = {}; // 使用 string 作为键的对象

          for (const item of Arr) {
            frequency[item] = (frequency[item] || 0) + 1; // 强制转换为 string
          }

          return frequency; // 最后转换回 Record<T, number>
        }
        /** 获取 数组 中 最大值 和 最小值。如果 数组 为空 返回 null */


        Get_Arr_Min_And_Max(Arr) {
          if (Arr.length === 0) return null;
          return {
            min: Math.min(...Arr),
            max: Math.max(...Arr)
          };
        }
        /** 获取 数组 中 目标值 的 索引，如果 没有 找到 任何 匹配 的 索引 返回 -1 */


        Get_Arr_Target_Index(Arr, Target) {
          const Arr_Index = [];

          for (let i = 0; i < Arr.length; i++) {
            if (Arr[i] === Target) {
              Arr_Index.push(i);
            }
          }

          return Arr_Index.length > 0 ? Arr_Index : -1;
        }
        /** 返回数组中最接近目标数字的值 */


        Get_Arr_Closest_Number(Arr, Target) {
          if (Arr.length === 0) {
            throw new Error("数组不能为空");
          } // 使用 reduce 方法找到最接近的数字


          return Arr.reduce((Closest, Current) => {
            // 计算当前数字与目标数字的差值
            const CurrentDiff = Math.abs(Current - Target);
            const ClosestDiff = Math.abs(Closest - Target); // 如果当前数字更接近目标，则更新 closest

            return CurrentDiff < ClosestDiff ? Current : Closest;
          });
        }
        /** 获取随机坐标 (X, Y) */


        Get_Random_Pos(Min_X, Max_X, Min_Y, Max_Y) {
          const Pos_X = this.Get_Random_Int(Min_X, Max_X);
          const Pos_Y = this.Get_Random_Int(Min_Y, Max_Y);
          return v3(Pos_X, Pos_Y, 0);
        }
        /**
         * 获取不重复的随机坐标数组
         * @param Leng 需要生成的坐标数量
         * @param Min_X X轴最小值
         * @param Max_X X轴最大值
         * @param Min_Y Y轴最小值
         * @param Max_Y Y轴最大值
         * @param MinDistance 坐标之间的最小间隔距离（默认100）
         * @returns 不重复的坐标数组
         */


        Get_Random_Pos_Arr(Leng, Min_X, Max_X, Min_Y, Max_Y, MinDistance = 100) {
          const Pos_Arr = [];
          let MaxAttempts = 1000; // 防止无限循环的安全阀

          while (Pos_Arr.length < Leng && MaxAttempts-- > 0) {
            const Pos = this.Get_Random_Pos(Min_X, Max_X, Min_Y, Max_Y); // 检查新坐标与现有坐标的最小距离

            const isTooClose = Pos_Arr.some(Existing => {
              return Pos.clone().subtract(Existing).length() < MinDistance;
            }); // 如果坐标有效（不与其他坐标太近），则加入数组

            if (!isTooClose) {
              Pos_Arr.push(Pos);
            } // 如果无效，直接跳过，继续循环生成新坐标

          }

          if (MaxAttempts <= 0) {
            console.warn(`无法在 ${MaxAttempts} 次尝试内生成所有不重复坐标，可能空间不足或间隔要求过高`);
          }

          return Pos_Arr;
        }
        /**秒数转时间字符串 */


        Seconds_To_Time_String(Seconds) {
          const Hours = Math.floor(Seconds / 3600);
          const Minutes = Math.floor(Seconds % 3600 / 60);
          const Secs = Seconds % 60; // 手动格式化为两位数

          let FormattedHours = (Hours < 10 ? '0' : '') + Hours + ":";

          if (Hours == 0) {
            FormattedHours = "";
          }

          let FormattedMinutes = (Minutes < 10 ? '0' : '') + Minutes + ":";
          let FormattedSeconds = (Secs < 10 ? '0' : '') + Secs;
          return `${FormattedHours}${FormattedMinutes}${FormattedSeconds}`;
        }
        /**打印当前时间的函数 */


        printCurrentTime() {
          const now = new Date(); // 获取当前时间

          const formattedTime = now.toLocaleString(); // 格式化时间

          console.log("当前时间: " + formattedTime); // 打印时间
        }
        /**消消乐 消除
         * @Rows 行数
         * @Cols 列数
         */


        XXL_Des(Rows, Cols, Grid) {
          let Result = []; // 检查横向相邻元素

          for (let i = 0; i < Rows; i++) {
            for (let j = 0; j < Cols - 2; j++) {
              const Index_1 = i * Cols + j;
              const Index_2 = i * Cols + j + 1;
              const Index_3 = i * Cols + j + 2;

              if (Grid[Index_1] === Grid[Index_2] && Grid[Index_2] === Grid[Index_3]) {
                Result.push(Index_1, Index_2, Index_3);
              }
            }
          } // 检查纵向相邻元素


          for (let j = 0; j < Cols; j++) {
            for (let i = 0; i < Rows - 2; i++) {
              const Index_1 = i * Cols + j;
              const Index_2 = (i + 1) * Cols + j;
              const Index_3 = (i + 2) * Cols + j;

              if (Grid[Index_1] === Grid[Index_2] && Grid[Index_2] === Grid[Index_3]) {
                Result.push(Index_1, Index_2, Index_3);
              }
            }
          }

          Result = this.Get_Arr_Unique(Result);
          return Result;
        }
        /**消消乐 掉落
         * @Rows 行数
         * @Cols 列数
         * @returns [掉落前索引,掉落后索引]
         */


        XXL_Fall(Rows, Cols, Grid) {
          if (Grid.length !== Rows * Cols) {
            throw new Error(`Grid must have exactly ${Rows * Cols} elements`);
          }

          const Result = []; // 从下往上遍历每一列

          for (let j = 0; j < Cols; j++) {
            let Write_Pointer = Rows - 1; // 从最底部开始写入
            // 从下往上遍历每一行

            for (let i = Rows - 1; i >= 0; i--) {
              const Index_Start = i * Cols + j; // 如果当前元素不是空格子，将其移动到 Write_Pointer 的位置

              if (Grid[Index_Start] !== -1) {
                const Index_End = Write_Pointer * Cols + j; // 如果起始位置和目标位置不同，记录移动

                if (Index_Start !== Index_End) {
                  Result.push({
                    Index_Start,
                    Index_End
                  });
                }

                Write_Pointer--; // 更新写入位置
              }
            }
          }

          return Result;
        }

      }, _class2.instance = new _class2(), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=95f6b632d06b8fae52fed643b3a0c80fa5442679.js.map