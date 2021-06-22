// 方法装饰器 用来修饰类里面的方法

// 普通方法，target 对应的是类的 prototype
// 静态方法，target 对应的是类的构造函数
// 第二个参数是所要装饰的属性名
// 第三个参数是该属性的描述对象
function getNameDecorator(target: any, name: string, descriptor: PropertyDescriptor){
  descriptor.value = function(){
    return 'xxx';
  }
}
function readonly(target: any, name: string, descriptor: PropertyDescriptor){
  descriptor.writable = false;
}

class SomeClass {
  name: string;
  constructor(name: string){
    this.name = name
  }
  @getNameDecorator
  getName() { return this.name }
  
  @readonly
  getNameSecond(){ return this.name}
}

const s = new SomeClass("abc");
console.log(s.getName());
console.log(s.getNameSecond());
s.getNameSecond = function(){
  return 'ccc'
}
