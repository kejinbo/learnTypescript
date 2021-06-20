// 联合类型和类型保护

interface Bird {
  fly: boolean;
  sing: () => void;
}

interface Dog {
  fly: boolean;
  bark: () => void;
}

function trainAnimal(animal: Bird | Dog) {
  // 通过类型断言的方式，对类型进行保护
  if (animal.fly) {
    // 因为不加断言的话 ts 不知道你的animal是否是Brid类型的
    // 但是开发者本身是清楚 fly 为 true 时候，一定是Bird类型
    (animal as Bird).sing();
  } else {
    (animal as Dog).bark();
  }
}

// in 语法来做类型保护
function trainAnimalSecond(animal: Bird | Dog) {
  if ("sing" in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}

// typeof 语法来做类型保护
function add(first: number | string, second: number | string) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }
  return first + second;
}

// enum 枚举类型
