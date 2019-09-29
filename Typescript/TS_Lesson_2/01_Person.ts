interface IVacation {
    vacationStart():void
    vacationEnd():void
}
export class Person {
    protected id:string
    lastName:string=""
    firstName:string=""
    age:number=30
    constructor(lastName,firsName){
        this.lastName=lastName,
        this.firstName=firsName
    }
    print(){
        console.log(`${this.lastName}/${this.firstName}/${this.age}`)
    }
}
class WorkerPerson extends Person implements IVacation{
    readonly salary:number=190
    position:string
    static budget=1000
    constructor(lastName,firsName,position){
        super(lastName,firsName)
        this.position=position
    }
    print() {
        super.print();
        console.log(this.position)
    }
    arrowMethod=()=>{

    }
    vacationEnd(): void {
    }

    vacationStart(): void {
      console.log('id'+this.id)
    }
     get fullName():string{
        return `${this.lastName} ${this.firstName}`
     }
     set fullName(newName:string){
        let arr=newName.split(' ')
         if (arr.length!=2){
             throw new Error("Wrong name format!")
         }
         this.firstName=arr[0]
         this.lastName=arr[1]
     }
     modifyBudget(){
        WorkerPerson.budget+=10
     }
}

let w=new WorkerPerson("Curly","Joe","Admin")
w.fullName="Vasya CCCCC"
console.log(w.fullName)
let w2=new WorkerPerson("Hidden","Nick","Tester")
console.log(WorkerPerson.budget)
w2.modifyBudget()
w.modifyBudget()
console.log(WorkerPerson.budget)