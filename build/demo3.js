"use strict";
// private protect public 访问类型
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// public 允许我在类的内/外被调用
// private 允许我在类的内被调用
// protect 允许我在类内以及继承的子类中使用
var Person1 = /** @class */ (function () {
    function Person1() {
        this.name = "name";
    }
    Person1.prototype.sayName = function () {
        console.log(this.name);
    };
    return Person1;
}());
var Teacher1 = /** @class */ (function (_super) {
    __extends(Teacher1, _super);
    function Teacher1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher1.prototype.sayTeacherName = function () {
        _super.prototype.sayName.call(this);
    };
    return Teacher1;
}(Person1));
// const teacher = new Teacher1();
// teacher.sayTeacherName();
// teacher.sayName();
var Person = /** @class */ (function () {
    // public name: string;
    // // 构造器 constructor ，会在实例化的时候调用
    // constructor(name: string) {
    //   this.name = name;
    // }
    // 简化写法
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(age) {
        var _this = _super.call(this, "xx") || this;
        _this.age = age;
        return _this;
    }
    return Teacher;
}(Person));
var t = new Teacher(24);
console.log(t.name, t.age);
