// 普通接口
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };

printLabel(myObj);

interface LabelledValue {
  label: string;
}

function printLabel2(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

printLabel2(myObj);

// 可选属性
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

function createSquare2(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  // if (config.clor) {
  //   // Error: Property 'clor' does not exist on type 'SquareConfig'
  //   newSquare.color = config.clor;
  // }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare2({ color: "black" });

// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

let a1: number[] = [1, 2, 3, 4, 5];
let ro: ReadonlyArray<number> = a1;

// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a1 = ro; // error!

a1 = ro as number[];

// 额外的属性检查
// let mySquare2 = createSquare2({ colour: "red", width: 100 });

let mySquare3 = createSquare2({ width: 100, opacity: 0.5 } as SquareConfig); // 类型断言

interface SquareConfig2 {
  color?: string;
  width?: number;
  [propName: string]: any;
}

// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

let mySearch2: SearchFunc;
mySearch2 = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};

let mySearch3: SearchFunc;
mySearch3 = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
};

// 可索引的类型
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray = ["Bob", "Fred"];
let myStr: string = myArray[0];

class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}
// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
  [x: number]: string;
  [x: string]: string;
}

// 索引签名设置为只读
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
// myArray2[2] = "Mallory"; // error

// 类类型
// 实现接口
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

// 静态
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface2;
}

interface ClockInterface2 {
  tick();
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface2 {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface2 {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface2 {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

// 继承接口
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 10;

// 混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) {};
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//   select() {}
// }
