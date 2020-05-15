// 解构数组
var input = [1, 2];
var [first, second] = input;

// swap variables
[first, second] = [second, first];

// 作用于函数参数
function f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}
f([1, 2]);

var [first, ...rest] = [1, 2, 3, 4];

var [first2] = [1, 2, 3, 4];

// 对象解构
let o = {
  a: "foo",
  b: 12,
  c: "bar",
};
let { a, b } = o;

let { ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;
var { a: newNeme1, b: newName2 } = o;

function keepWholeObject(wholeObject: { a: string; b?: number }) {
  let { a, b = 1001 } = wholeObject;
}

// 展开
let first1 = [1, 2];
let second2 = [3, 4];
let bothPlus = [0, ...first1, ...second2, 5];
