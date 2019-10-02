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
var Person = /** @class */ (function () {
    function Person(lastName, firsName) {
        this.lastName = "";
        this.firstName = "";
        this.age = 30;
        this.lastName = lastName,
            this.firstName = firsName;
    }
    Person.prototype.print = function () {
        console.log(this.lastName + "/" + this.firstName + "/" + this.age);
    };
    return Person;
}());
exports.Person = Person;
var WorkerPerson = /** @class */ (function (_super) {
    __extends(WorkerPerson, _super);
    function WorkerPerson(lastName, firsName, position) {
        var _this = _super.call(this, lastName, firsName) || this;
        _this.salary = 190;
        _this.arrowMethod = function () {
        };
        _this.position = position;
        return _this;
    }
    WorkerPerson.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log(this.position);
    };
    WorkerPerson.prototype.vacationEnd = function () {
    };
    WorkerPerson.prototype.vacationStart = function () {
        console.log('id' + this.id);
    };
    Object.defineProperty(WorkerPerson.prototype, "fullName", {
        get: function () {
            return this.lastName + " " + this.firstName;
        },
        set: function (newName) {
            var arr = newName.split(' ');
            if (arr.length != 2) {
                throw new Error("Wrong name format!");
            }
            this.firstName = arr[0];
            this.lastName = arr[1];
        },
        enumerable: true,
        configurable: true
    });
    WorkerPerson.prototype.modifyBudget = function () {
        WorkerPerson.budget += 10;
    };
    WorkerPerson.budget = 1000;
    return WorkerPerson;
}(Person));
var w = new WorkerPerson("Curly", "Joe", "Admin");
w.fullName = "Vasya CCCCC";
console.log(w.fullName);
var w2 = new WorkerPerson("Hidden", "Nick", "Tester");
console.log(WorkerPerson.budget);
w2.modifyBudget();
w.modifyBudget();
console.log(WorkerPerson.budget);
