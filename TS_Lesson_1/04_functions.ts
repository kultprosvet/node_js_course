function add(x:number,y:number):number {
   return x+y;
}
const add2=(x,y) =>{
    return x+y;
}
const add3=function(x,y) {
    return x+y;
}
add(1,2)
function buildName(name:string,prefix:string='mr') {
    return `${prefix} ${name}`
}
console.log(buildName('Jons'))
console.log(buildName('Jons','ms'))
function optional(req,opt?:string) {
    console.log(req,opt)
}
optional(1)
function optionalObject(x={"foo":"bar"}) {
    console.log(x)
}
optionalObject()
function varArg(first:string,...rest:string[]) {
    return first+' , '+rest.join(' , ')
}
console.log(varArg("first",'second','third'))

interface Person {
    lastName:string
    firsName:string
    age?:number
    print?:()=>void
}

let person:Person={
    lastName:"ddd",
    firsName:"xxxx",
    print:function(this:Person){
        console.log(this.firsName,this.lastName)
    }
}
person.print()

function compare(x:string,y:string):boolean;
function compare(x:Person,y:Person):boolean;
function compare(x,y):boolean {
    if (typeof x=='string'){
        return x<y
    }
    if (typeof x=='object'){
        if  (x.lastName===y.lastName){
            return x.firsName<y.firsName
        }
        return x.lastName<y.lastName
    }

}
compare("1","2")