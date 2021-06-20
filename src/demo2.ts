// interface 和type相类似，但并不完全相同
interface Person {
  // readonly name: string; 只读属性
  name: string;
  age?: number; // 可选属性
  [propName: string]: any; //多出其他类型也是可以的
}

const getPersonName = (person: Person): void => {
  console.log(person.name);
};

getPersonName({
  name: "tony",
  // sex: 'male' //对于直接传字面量时，ts会强校验
});

class User implements Person {
  name = "tony";
}

// 定义函数的语法声明
interface SayHi {
  (word: string): string; // 接受一个string的参数，同时返回值也是string
}
const say: SayHi = (word: string) => {
  return word;
};
