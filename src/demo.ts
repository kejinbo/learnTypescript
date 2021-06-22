// // 基础类型 string number object undefined null boolean
// const count: number = 123;
// const text: string = "xxx";

// class Person {}
// const person: Person = new Person();

// // getDate: () => Date 表示getDate是个函数，其返回值是日期对象
// // 后面的 () => new Date 是具体的函数体
// const getDate: () => Date = () => new Date();

// interface Point {
//   x: number;
//   y: number;
// }
// function demo(data: Point) {
//   return data.x + data.y;
// }
// demo({ x: 1, y: 2 });

// // type annotation 类型注解，我们来告诉 TS 变量时什么类型
// // type interface 类型推断，TS 会自动的去尝试分析变量的类型

// // TS 能推断类型 我们就不写，不能推断我们就需要使用类型注解
// let count2: number = 123; // 类型注解
// let count3 = "xxx"; // 类型推断

// // 函数的定义
// // 有返回值的情况
// function add(first: number, second: number): number {
//   return first + second;
// }

// // 没有返回值的情况
// function sayHello(): void {
//   console.log("hi");
// }

// // 这里表示，这个函数永远不可能执行到最后
// function errorEmitter(): never {
//   throw new Error();
// }

// // 函数参数是解构的情况
// function add2({ first, second }: { first: number; second: number }): number {
//   return first + second;
// }
// add2({ first: 2, second: 2 });

// // 数组
// // 基础类型的存储
// const arr: (number | string)[] = ["1", 2, 3];

// // 引用类型
// class Teacher {
//   name: string;
//   age: number;
// }

// const object: Teacher[] = [
//   new Teacher(),
//   {
//     name: "bobo",
//     age: 24,
//   },
// ];

// // 元组
// // 当你的数组长度固定时，你可以使用元组规定每个元素的类型
// const teachers: [string, string, number][] = [
//   ["kk", "male", 19],
//   ["bobo", "female", 25],
// ];
