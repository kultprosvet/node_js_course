import {Person} from "./01_Person";
import {Circle, Rectangle, Shape} from "./02_abstract";

function createArrayNumber(val:number):number[] {
 return [val,val]
}
function createArrayAny(val:any):any[]{
    return [val,val]
}
function createArray<T>(val:T):T[]{
    return [val,val]
}
let p=new Person("Generic","First")
let r=new Rectangle()
let arr=createArrayAny(p)
let typedArray=createArray<Person>(p)
let rectArray=createArray(r)
rectArray[0].height=10
function twoTypes<T,T2>(p1:T,p2:T2):{par1:T,par2:T2} {
    return {
        par1:p1,
        par2:p2
    }
}
//type StringOrNumber=string|number
function varArgs<T>(...args:T[]):T[] {
    if (!["string","number"].includes( typeof args[0])){
     throw new Error("wrong type")
    }
    return args
}
class List<T>{
    items:T[]=[]
    push(v:T){
        this.items.push(v)
    }
}
let personsList=new List<Person>()
personsList.push(p)
let rectangleList=new List<Rectangle>()
rectangleList.push(r)
let circle=new Circle()
let shapesList=new List<Shape>()
shapesList.push(circle)
shapesList.push(r)

class ShapeList<T extends Shape>{

}
let shapeList=new ShapeList<Shape>()
interface Triangle {
    a:number
    b:number
}
class TriangleStore<T extends Triangle> {

}
function createInstance<C>(c:{new(): C; }):C {
    return new c()
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
let obj={a:1,b:"2",c:false}
getProperty(obj,"a")
getProperty(obj,"ab")
type StringOrNumber=string|number
function stringOrNumberP(p:StringOrNumber) {

}
stringOrNumberP("d")
stringOrNumberP(1)
