import {Component} from "./02_PropertyClient";

let a:any={
    lastName:"XXX",
    firstName:"YYY"
}
interface Person{
    lastName:string,
    firstName:string
}
function processPerson(p:any):void {
    if((p as Person).lastName && (p as Person).firstName){
        console.log((p as Person).lastName)
    }
}
function isPerson(p:any): p is Person{
    return (p as Person).lastName!==undefined &&
    (p as Person).firstName!==undefined
}
function processPerson2(p:any):void {
    if(isPerson(p)){
        console.log(p.firstName)
    }
}
function isNumber(x:any): x is number {
    return typeof x === "number"
}
let number:any=12.2
if (isNumber(number)){
    number.toPrecision()
}
let component=new Component()
function renderComponent(c:any) {
    if (c instanceof Component){
        c.render()
    }
}

