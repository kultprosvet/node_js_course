let a:boolean
let a2=false
let b="TRUE"
let b2:string="TRUE"
let c:number=2
let c2=3
let anyVar={test:"1"}
let arr=['sdsd','sss','sdsd']

let arr2:number[]
let arr3:Array<number>
let arr4:Array<any>
let arr5:any[]

let x:[string,number]
x=["111",122]
const COLOR_BLUE="blue"
const COLOR_RED="red"

enum Color {
    RED="red",
    GREEN="green",
    BLUE="blue"
}
enum ColorNum {
    RED=2,
    GREEN,
    BLUE
}
console.log('RED',Color.RED)

function foo():void {
   return
}
const arrowFunc=():void=>{
}
function never():never {
    while(true){

    }
}
function never2():never {
    throw new Error("ddd")
}
let obj={
    aaa:"dsss",
    method:()=>{}
}
let anyString="xxxxxxxx"
let l:number=(<string>anyString).length
let strLen= (anyString as string).length
//@ts-ignore
strLen = anyString.length
