var a;
var a2 = false;
var b = "TRUE";
var b2 = "TRUE";
var c = 2;
var c2 = 3;
var anyVar = { test: "1" };
var arr = ['sdsd', 'sss', 'sdsd'];
var arr2;
var arr3;
var arr4;
var arr5;
var x;
x = ["111", 122];
var COLOR_BLUE = "blue";
var COLOR_RED = "red";
var Color;
(function (Color) {
    Color["RED"] = "red";
    Color["GREEN"] = "green";
    Color["BLUE"] = "blue";
})(Color || (Color = {}));
var ColorNum;
(function (ColorNum) {
    ColorNum[ColorNum["RED"] = 2] = "RED";
    ColorNum[ColorNum["GREEN"] = 3] = "GREEN";
    ColorNum[ColorNum["BLUE"] = 4] = "BLUE";
})(ColorNum || (ColorNum = {}));
console.log('RED', Color.RED);
function foo() {
    return;
}
var arrowFunc = function () {
};
function never() {
    while (true) {
    }
}
function never2() {
    throw new Error("ddd");
}
var obj = {
    aaa: "dsss",
    method: function () { }
};
var anyString = "xxxxxxxx";
var l = anyString.length;
var strLen = anyString.length;
//@ts-ignore
strLen = anyString.length;
