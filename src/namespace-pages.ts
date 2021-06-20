/// <reference path="./namespace-components.ts" />
namespace Home {
  interface Person {
    name: string;
    age: number;
    gender: string;
  }

  export class Page {
    constructor() {
      new Component.Header();
      new Component.Content();
      new Component.Footer();
    }
  }

  // 泛型中的keyof 语法的使用
  class Teacher {
    constructor(private info: Person) {}
    getInfo<T extends keyof Person>(key: T): Person[T] {
      return this.info[key];
    }
  }
  const t = new Teacher({
    name: "kbobo",
    age: 20,
    gender: "male",
  });
  const i = t.getInfo("age");
  console.log(i);
}
