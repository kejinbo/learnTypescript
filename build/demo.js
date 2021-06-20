"use strict";
// 基础类型 string number object undefined null boolean
var count = 123;
var text = "xxx";
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
// getDate: () => Date 表示getDate是个函数，其返回值是日期对象
// 后面的 () => new Date 是具体的函数体
var getDate = function () { return new Date(); };
function demo(data) {
    return data.x + data.y;
}
demo({ x: 1, y: 2 });
// type annotation 类型注解，我们来告诉 TS 变量时什么类型
// type interface 类型推断，TS 会自动的去尝试分析变量的类型
// TS 能推断类型 我们就不写，不能推断我们就需要使用类型注解
var count2 = 123; // 类型注解
var count3 = "xxx"; // 类型推断
// 函数的定义
// 有返回值的情况
function add(first, second) {
    return first + second;
}
// 没有返回值的情况
function sayHello() {
    console.log("hi");
}
// 这里表示，这个函数永远不可能执行到最后
function errorEmitter() {
    throw new Error();
}
// 函数参数是解构的情况
function add2(_a) {
    var first = _a.first, second = _a.second;
    return first + second;
}
add2({ first: 2, second: 2 });
// 数组
// 基础类型的存储
var arr = ["1", 2, 3];
// 引用类型
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    return Teacher;
}());
var object = [
    new Teacher(),
    {
        name: "bobo",
        age: 24,
    },
];
// 元组
// 当你的数组长度固定时，你可以使用元组规定每个元素的类型
var teachers = [
    ["kk", "male", 19],
    ["bobo", "female", 25],
];
