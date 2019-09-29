export abstract class Shape{
    abstract calcArea()
}
export class Rectangle extends Shape{
    width:number
    height:number
    calcArea() {
        return this.width*this.height
    }
}
export class Circle extends Shape{
    radius:number
    calcArea() {
        return this.radius*Math.PI*Math.PI
    }

}
let rectangle=new Rectangle()
rectangle.width=20
rectangle.height=30
let circle=new Circle()
circle.radius=20
let shapes:Array<Shape>=[rectangle,circle]
let total=0
for(let s of shapes){

    if (s instanceof Circle){
        console.log("Circle radius "+(s as Circle).radius)
    }
    total+=s.calcArea()
}
console.log('area '+total)
interface IRectangle extends Rectangle{

}
class Square implements IRectangle{
    width: number
    height: number

    calcArea(): number {
        throw new Error("Method not implemented.");
    }


}