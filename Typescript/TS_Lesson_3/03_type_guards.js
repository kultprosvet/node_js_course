"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _02_PropertyClient_1 = require("./02_PropertyClient");
var a = {
    lastName: "XXX",
    firstName: "YYY"
};
function processPerson(p) {
    if (p.lastName && p.firstName) {
        console.log(p.lastName);
    }
}
function isPerson(p) {
    return p.lastName !== undefined &&
        p.firstName !== undefined;
}
function processPerson2(p) {
    if (isPerson(p)) {
        console.log(p.firstName);
    }
}
function isNumber(x) {
    return typeof x === "number";
}
var number = 12.2;
if (isNumber(number)) {
    number.toPrecision();
}
var component = new _02_PropertyClient_1.Component();
function renderComponent(c) {
    if (c instanceof _02_PropertyClient_1.Component) {
        c.render();
    }
}
