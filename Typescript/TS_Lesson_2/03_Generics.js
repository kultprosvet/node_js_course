"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _01_Person_1 = require("./01_Person");
var _02_abstract_1 = require("./02_abstract");
function createArrayNumber(val) {
    return [val, val];
}
function createArrayAny(val) {
    return [val, val];
}
function createArray(val) {
    return [val, val];
}
var p = new _01_Person_1.Person("Generic", "First");
var r = new _02_abstract_1.Rectangle();
var arr = createArrayAny(p);
var typedArray = createArray(p);
var rectArray = createArray(r);
rectArray[0].height = 10;
function twoTypes(p1, p2) {
    return {
        par1: p1,
        par2: p2
    };
}
//type StringOrNumber=string|number
function varArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!["string", "number"].includes(typeof args[0])) {
        throw new Error("wrong type");
    }
    return args;
}
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.push = function (v) {
        this.items.push(v);
    };
    return List;
}());
var personsList = new List();
personsList.push(p);
var rectangleList = new List();
rectangleList.push(r);
var circle = new _02_abstract_1.Circle();
var shapesList = new List();
shapesList.push(circle);
shapesList.push(r);
var ShapeList = /** @class */ (function () {
    function ShapeList() {
    }
    return ShapeList;
}());
var shapeList = new ShapeList();
var TriangleStore = /** @class */ (function () {
    function TriangleStore() {
    }
    return TriangleStore;
}());
function createInstance(c) {
    return new c();
}
function getProperty(obj, key) {
    return obj[key];
}
var obj = { a: 1, b: "2", c: false };
getProperty(obj, "a");
getProperty(obj, "ab");
function stringOrNumberP(p) {
}
stringOrNumberP("d");
stringOrNumberP(1);
