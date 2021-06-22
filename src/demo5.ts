// // 联合类型和类型保护

// interface Bird {
//   fly: boolean;
//   sing: () => void;
// }

// interface Dog {
//   fly: boolean;
//   bark: () => void;
// }

// function trainAnimal(animal: Bird | Dog) {
//   // 通过类型断言的方式，对类型进行保护
//   if (animal.fly) {
//     // 因为不加断言的话 ts 不知道你的animal是否是Brid类型的
//     // 但是开发者本身是清楚 fly 为 true 时候，一定是Bird类型
//     (animal as Bird).sing();
//   } else {
//     (animal as Dog).bark();
//   }
// }

// // in 语法来做类型保护
// function trainAnimalSecond(animal: Bird | Dog) {
//   if ("sing" in animal) {
//     animal.sing();
//   } else {
//     animal.bark();
//   }
// }

// // typeof 语法来做类型保护
// function add(first: number | string, second: number | string) {
//   if (typeof first === "string" || typeof second === "string") {
//     return `${first}${second}`;
//   }
//   return first + second;
// }

// // 泛型 generic 泛指的类型
// // 起名没有特别要求，跟变量命名一样
// function join<ABC>(first: ABC, second: ABC) {
//   return `${first}${second}`;
// }
// // 这里的意思是：我指定ABC这个泛型的类型是string，那么我的两个参数就必须是string
// join<string>("1", "1");
// // join<string>("1", 1); // 不是string 的参数就会报错

// // 类中使用泛型
// // class DataManage<T> {
// //   constructor(public data: T[]){}
// //   getItem(index: number){
// //     return this.data[index];
// //   }
// // }
// // const data = new DataManage<string>(['sss'])

// // 当我的代码里面使用了泛型，而我传的数据是一个对象，并且引用了对象里面熟读属性
// interface Item {
//   name: string;
//   [propName: string]: any;
// }
// // 泛型继承Item接口的属性。使用 extend 可以更好的约束数据的类型
// class DataManage<T extends Item> {
//   constructor(public data: T[]) {}

//   getItem(index: number): string {
//     return this.data[index].name;
//   }
// }

// const data = new DataManage([
//   {
//     name: "kebobo",
//   },
// ]);

// // 如何使用泛型作为一个具体的类型注解
// const foo: <T>(params: T) => T = <T>(params: T) => {
//   return params;
// };
