// 布尔值
var isDone = false;
// 数字
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// 字符串
var names = "bob";
names = "smith";
var age = 37;
var sentence = "Hello, my name is " + names + ". I'll be " + (age + 1) + " years old next month.";
// 数组
var list = [1, 2, 3];
var lists = [1, 2, 3];
// 元组Tuple
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10];
// Initialize it incorrectly
// x = [10, "hello"];
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
// 枚举
{
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
    })(Color || (Color = {}));
    var c = Color.Green;
}
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
var listss = [1, true, "free"];
// Void
function warnUser() {
    console.log("Thie is my warning message");
}
var unusable = undefined;
// undefined null
var u = undefined;
var n = null;
// Never
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) { }
}
create({ prop: 0 });
create(null);
var someValue = "this is a string";
var strLength = someValue.length;
