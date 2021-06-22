// // private protect public 访问类型

// // public 允许我在类的内/外被调用
// // private 允许我在类的内被调用
// // protect 允许我在类内以及继承的子类中使用
// class Person1 {
//   private name = "name";
//   sayName() {
//     console.log(this.name);
//   }
// }
// class Teacher1 extends Person1 {
//   sayTeacherName() {
//     super.sayName();
//   }
//   // sayName() {
//   //   console.log(super.name + "xx");
//   // }
// }

// // const teacher = new Teacher1();
// // teacher.sayTeacherName();
// // teacher.sayName();

// class Person {
//   // public name: string;
//   // // 构造器 constructor ，会在实例化的时候调用
//   // constructor(name: string) {
//   //   this.name = name;
//   // }
//   // 简化写法
//   constructor(public name: string) {}
// }

// class Teacher extends Person {
//   constructor(public age: number) {
//     super("xx"); // 继承了父类需要手动触发一下父类的构造器
//   }
// }

// const t = new Teacher(24);
// console.log(t.name, t.age);
