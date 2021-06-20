"use strict";
// 联合类型和类型保护
function trainAnimal(animal) {
    // 通过类型断言的方式，对类型进行保护
    if (animal.fly) {
        // 因为不加断言的话 ts 不知道你的animal是否是Brid类型的
        // 但是开发者本身是清楚 fly 为 true 时候，一定是Bird类型
        animal.sing();
    }
    else {
        animal.bark();
    }
}
// in 语法来做类型保护
function trainAnimalSecond(animal) {
    if ("sing" in animal) {
        animal.sing();
    }
    else {
        animal.bark();
    }
}
// typeof 语法来做类型保护
function add(first, second) {
    if (typeof first === "string" || typeof second === "string") {
        return "" + first + second;
    }
    return first + second;
}
// 泛型 generic 泛指的类型
// 起名没有特别要求，跟变量命名一样
function join(first, second) {
    return "" + first + second;
}
// 这里的意思是：我指定ABC这个泛型的类型是string，那么我的两个参数就必须是string
join("1", "1");
// 泛型继承Item接口的属性。使用 extend 可以更好的约束数据的类型
var DataManage = /** @class */ (function () {
    function DataManage(data) {
        this.data = data;
    }
    DataManage.prototype.getItem = function (index) {
        return this.data[index].name;
    };
    return DataManage;
}());
var data = new DataManage([
    {
        name: "kebobo",
    },
]);
// 如何使用泛型作为一个具体的类型注解
var foo = function (params) {
    return params;
};
