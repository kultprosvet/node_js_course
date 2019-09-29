interface Car {
    color: string
    brand: string
    year: number
}
function updateCar(id: number, data: Partial<Car>) {}
updateCar(1, { color: 'red' })
function handler(car: Readonly<Car>) {
    //car.brand="sdds"
}
interface Coordinate {
    latitude: number
    longitude: number
}
type Points = 'post' | 'gas' | 'grocery'
type MyMap = Record<Points, Coordinate>
function mapFunc(m: MyMap) {
    m.gas.latitude
}

type SubCar = Pick<Car, 'color' | 'brand'>
function subCarFunc(c: SubCar): void {
    c.brand
}
type OmitCar = Omit<Car, 'color'>
function omitCarFunc(car: OmitCar) {}
interface SomeNullable {
    x: number | null
    y: number | null
    z: number
}
function nonNulable(v: NonNullable<SomeNullable>) {}
nonNulable({ z: 1 })

function returns() {
    return {
        x: '2',
        y: '3',
    }
}
type Returns = () => { x: string; y: string }
type RType = ReturnType<typeof returns>
function rType(t: RType) {
    t.x
}
interface NotRequired {
    x?: number
    y?: number
    z?: number
}
type R = Required<NotRequired>
function reqFunc(v: R) {}
reqFunc({ x: 12, y: 12, z: 12 })
