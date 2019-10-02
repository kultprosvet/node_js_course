"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
class Test{
  @validateArgs()
  method(@RegExpMatch(/\d+/) p:string){
  console.log(p)
  }
}
 */
require("reflect-metadata");
function RegExpMatch(regExp) {
    return function (target, propertyKey, parameterIndex) {
        console.log(target, propertyKey, parameterIndex);
        Reflect.defineMetadata("regexp_" + parameterIndex, regExp, target, propertyKey);
    };
}
function validateArgs() {
    return function (target, propertyKey, descriptor) {
        var oldMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log('overrided');
            for (var i = 0; i < args.length; i++) {
                var regExp = Reflect.getMetadata("regexp_" + i, target, propertyKey);
                if (!regExp)
                    continue;
                if (typeof args[i] !== 'string') {
                    throw new Error('\x1b[31m Unable apply RegExpMatch( decorator to non string arguments');
                }
                if (!regExp.test(args[i])) {
                    throw new Error("\u001B[31m Arg " + i + "  doesn't match regexp " + regExp);
                }
            }
            oldMethod.apply(target, args);
        };
    };
}
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.print = function (p, p2, p3) {
        console.log(p);
    };
    __decorate([
        validateArgs(),
        __param(0, RegExpMatch(/\d+/)),
        __param(2, RegExpMatch(/[^\d]+/)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number, String]),
        __metadata("design:returntype", void 0)
    ], Test.prototype, "print", null);
    return Test;
}());
var t = new Test();
t.print('122', 1, 'sd');
t.print('12', 1, 'sss');
