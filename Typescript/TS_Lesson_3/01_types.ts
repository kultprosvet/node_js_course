type Obj = {
    prop1: string
    prop2: number
}
type Obj2 = {
    prop3: string
    prop4: string
}
type NullOrObj = null | Obj
type BooleanOrString = boolean | string

function someFunc(p: BooleanOrString) {}

type Intersection = Obj & Obj2
let intersection: Intersection = {
    prop1: '1',
    prop2: 2,
    prop3: 'sdds',
    prop4: 'sdds',
}
