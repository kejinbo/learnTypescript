// 类的装饰器
// 装饰器本身是一个函数
// 类的装饰器，接受的参数是构造函数
// 装饰器通过 @ 符号来使用
// 使用装饰器是，需要到tsconfig.json 文件里面把 Experimental Options 里面的配置项打开

function testDecorator(constructor: any) {
  // constructor.prototype.getName = function () {
  //   console.log("kbobo");
  // };
  console.log("kbobo");
}
function testDecorator1(constructor: any) {
  console.log("kbobo1");
}

// 装饰器的执行时机，在类创建好后就执行。就是老的构造函数先执行完，在执行修饰器的构造函数
// 注意他是修饰类的，所以无论你创建多少个实例，他都是执行一次（类创建好后的那一次）
// 如果有多个装饰器，执行的顺序是从下到上，从右到左
@testDecorator
@testDecorator1
class Test {}

const t = new Test();
// (t as any).getName();
