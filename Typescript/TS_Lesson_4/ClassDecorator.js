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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
@ClassDecorator({ a: 'b', sss: 12 })
class TestClass {
    name = 'ddd'
}
 */
function ClassDecorator(props) {
    return function (constructorFunc) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.call(this, args) || this;
                _this.property = 'sddsds';
                for (var p in props) {
                    _this[p] = props[p];
                }
                return _this;
            }
            return class_1;
        }(constructorFunc));
    };
}
var TestClass = /** @class */ (function () {
    function TestClass() {
        this.name = 'ddd';
    }
    TestClass = __decorate([
        ClassDecorator({ a: 'b', sss: 12 })
    ], TestClass);
    return TestClass;
}());
var t = new TestClass();
console.log(t);
