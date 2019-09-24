/*
class Test{
  @validateArgs()
  method(@RegExpMatch(/\d+/) p:string){
  console.log(p)
  }
}
 */
import 'reflect-metadata'
function RegExpMatch(regExp: RegExp) {
    return function(
        target: object,
        propertyKey: string | symbol,
        parameterIndex: number,
    ) {
        console.log(target, propertyKey, parameterIndex)
        Reflect.defineMetadata(
            `regexp_${parameterIndex}`,
            regExp,
            target,
            propertyKey,
        )
    }
}
function validateArgs() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        const oldMethod = descriptor.value
        descriptor.value = function(...args: any[]) {
            console.log('overrided')
            for (let i = 0; i < args.length; i++) {
                const regExp = Reflect.getMetadata(
                    `regexp_${i}`,
                    target,
                    propertyKey,
                )
                if (!regExp) continue
                if (typeof args[i] !== 'string') {
                    throw new Error(
                        '\x1b[31m Unable apply RegExpMatch( decorator to non string arguments',
                    )
                }
                if (!(regExp as RegExp).test(args[i])) {
                    throw new Error(
                        `\x1b[31m Arg ${i}  doesn't match regexp ${regExp}`,
                    )
                }
            }
            oldMethod.apply(target, args)
        }
    }
}
class Test {
    @validateArgs()
    print(
        @RegExpMatch(/\d+/) p: string,
        p2: number,
        @RegExpMatch(/[^\d]+/) p3: string,
    ) {
        console.log(p)
    }
}
let t = new Test()
t.print('122', 1, 'sd')
t.print('12', 1, 'sss')
