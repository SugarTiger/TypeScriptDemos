// 布尔值
var isDone: boolean = false;

// 数字
var decLiteral: number = 6;
var hexLiteral: number = 0xf00d;
var binaryLiteral: number = 0b1010;
var octalLiteral: number = 0o744;

// 字符串
var names: string = "bob";
names = "smith";

var age: number = 37;
var sentence: string = `Hello, my name is ${names}. I'll be ${
  age + 1
} years old next month.`;

// 数组
var list: number[] = [1, 2, 3];
var lists: Array<number> = [1, 2, 3];

// 元组Tuple
// Declare a tuple type
var x: [string, number];
// Initialize it
x = ["hello", 10];
// Initialize it incorrectly
// x = [10, "hello"];

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

// 枚举
{
  enum Color {
    Red = 1,
    Green,
    Blue,
  }
  let c: Color = Color.Green;
}
var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

var listss: any[] = [1, true, "free"];

// Void
function warnUser(): void {
  console.log("Thie is my warning message");
}
var unusable: void = undefined;

// undefined null
var u: undefined = undefined;
var n: null = null;

// Never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}

// Object
declare function create(o: object | null): void;

create({ prop: 0 });
create(null);

var someValue: any = "this is a string";
var strLength: number = (someValue as string).length;
