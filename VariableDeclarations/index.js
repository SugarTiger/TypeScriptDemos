var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _a;
// 解构数组
var input = [1, 2];
var first = input[0], second = input[1];
// swap variables
_a = [second, first], first = _a[0], second = _a[1];
// 作用于函数参数
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f([1, 2]);
var _b = [1, 2, 3, 4], first = _b[0], rest = _b.slice(1);
var first2 = [1, 2, 3, 4][0];
// 对象解构
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b;
var passthrough = __rest(o, []);
var total = passthrough.b + passthrough.c.length;
var newNeme1 = o.a, newName2 = o.b;
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
// 展开
var first1 = [1, 2];
var second2 = [3, 4];
var bothPlus = [0].concat(first1, second2, [5]);
