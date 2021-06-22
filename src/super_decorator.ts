function testDecorator(){
  return function<T extends new (...args: any[]) => any>(constructor: T){
    return class extends constructor {
      getName(){
        return this.name;
      }
    }
  }
}

const Test1 = testDecorator()(class {
  name: string;
  constructor(name: string){
    this.name = name;
  }
})
console.log(Test1);
const test1 = new Test1("xxx")
console.log(test1, test1.getName());