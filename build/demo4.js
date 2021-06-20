"use strict";
// getter setter
// class People {
//   constructor(private _name: string) {}
//   get name() {
//     return this._name + " xx";
//   }
//   set name(name: string) {
//     const realName = name.split(" ")[0];
//     this._name = realName;
//   }
// }
// const p = new People("kebobo");
// console.log(p.name);
// p.name = "kebobo ddd";
// console.log(p.name);
// 单例模式 只允许创建一个实例
// 创建单例 实例
var People = /** @class */ (function () {
    // 不让外部实例化
    function People(name) {
        this.name = name;
    }
    // 暴露一个方法提供给外部
    //static讲这个方法挂载到People类上，类似于 function foo(){} foo.xxx
    People.getInstance = function (name) {
        if (!this.instance) {
            this.instance = new People(name);
        }
        return this.instance;
    };
    return People;
}());
var p1 = People.getInstance("xx");
var p2 = People.getInstance("ss"); //这里就修改不成功了，因为共用了一个实例
console.log(p1.name, p2.name);
