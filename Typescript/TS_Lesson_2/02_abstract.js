"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
exports.Shape = Shape;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
exports.Rectangle = Rectangle;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.calcArea = function () {
        return this.radius * Math.PI * Math.PI;
    };
    return Circle;
}(Shape));
exports.Circle = Circle;
var rectangle = new Rectangle();
rectangle.width = 20;
rectangle.height = 30;
var circle = new Circle();
circle.radius = 20;
var shapes = [rectangle, circle];
var total = 0;
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var s = shapes_1[_i];
    if (s instanceof Circle) {
        console.log("Circle radius " + s.radius);
    }
    total += s.calcArea();
}
console.log('area ' + total);
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.calcArea = function () {
        throw new Error("Method not implemented.");
    };
    return Square;
}());
