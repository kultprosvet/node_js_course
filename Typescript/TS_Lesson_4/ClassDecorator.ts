/*
@ClassDecorator({ a: 'b', sss: 12 })
class TestClass {
    name = 'ddd'
}
 */
function ClassDecorator(props: object) {
    return function<T extends { new (...args: any[]): {} }>(
        constructorFunc: T,
    ) {
        return class extends constructorFunc {
            property = 'sddsds'
            constructor(...args: any[]) {
                super(args)
                for (const p in props) {
                    this[p] = props[p]
                }
            }
        }
    }
}
@ClassDecorator({ a: 'b', sss: 12 })
class TestClass {
    name = 'ddd'
}
let t = new TestClass()
console.log(t)
