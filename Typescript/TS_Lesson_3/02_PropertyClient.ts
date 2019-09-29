abstract class PropertyClient<T> {
    props: T
    abstract render()
}
type Translator = {
    t: (key: string) => string
}
type ApiClient = {
    fetchData: () => Promise<any>
}
export class Component extends PropertyClient<Translator & ApiClient> {
    p?: string
    p2: string | null
    render() {
        this.props.t('ss')
        this.props.fetchData().then()
    }
}
type Gender = 'male' | 'female'
let g: Gender = 'male'
function setGender(g: Gender) {}
setGender('male')
type Dice = 1 | 2 | 3 | 4 | 5 | 6
let result: Dice = 2
