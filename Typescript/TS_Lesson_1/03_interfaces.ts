interface Person {
    lastName:string
    firsName:string
    age?:number
    print?:()=>void
}
let person:Person={
    lastName:"ddd",
    firsName:"xxxx",
    print:()=>console.log("dss")
}
function printPerson(p:Person) {
    console.log(p.firsName,p.lastName)
}
printPerson(person)
interface IWorker extends Person{
    position:string,
    readonly sallary:number
}
let worker:IWorker={
    lastName:"Pupkin",
    firsName:"Vasya",
    position:'Developer',
    sallary:100
}
worker.position='Tester'
interface IndexObj{
    prop:string,
    [propName: string]: any;
}
let x:IndexObj={
    prop:'string',
    dsds:"sdsds",
    dsdds:"sddsds"
}
x['test']='ddssdds'
interface SomeFunc {
    (source: string, subString: string): boolean;
}
let func:SomeFunc=(source: string, subString: string)=>{
    return true
}