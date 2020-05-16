var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 普通接口
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabel2(labelledObj) {
    console.log(labelledObj.label);
}
printLabel2(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
function createSquare2(config) {
    var newSquare = { color: "white", area: 100 };
    // if (config.clor) {
    //   // Error: Property 'clor' does not exist on type 'SquareConfig'
    //   newSquare.color = config.clor;
    // }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare2({ color: "black" });
var p1 = { x: 10, y: 20 };
// p1.x = 5; // error!
var a1 = [1, 2, 3, 4, 5];
var ro = a1;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a1 = ro; // error!
a1 = ro;
// 额外的属性检查
// let mySquare2 = createSquare2({ colour: "red", width: 100 });
var mySquare3 = createSquare2({ width: 100, opacity: 0.5 }); // 类型断言
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var mySearch2;
mySearch2 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var mySearch3;
mySearch3 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var myArray2 = ["Alice", "Bob"];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 10;
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
