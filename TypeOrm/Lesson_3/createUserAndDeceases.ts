import { UserEntity } from '../../TypeOrm/Lesson_1/UserEntity'
import {
    createConnection,
    createQueryBuilder,
    getConnection,
    LessThan,
    Like,
    Raw,
} from 'typeorm'
import * as faker from 'faker'
import { DeceaseEntity } from '../Lesson_2/DeceaseEntity'
//import { DeceaseEntity } from './DeceaseEntity'

async function runQuery() {
    await createConnection()
    let user = new UserEntity()
    user.lastName = faker.name.lastName()
    user.firsName = faker.name.firstName()
    user.birthDay = faker.date.past()
    user.gender = faker.random.arrayElement([
        'male',
        'female',
    ])
    user.bio = faker.random.words(30)
    user.expirience = faker.random.number({
        min: 1,
        max: 100,
    })
    user.isActive = faker.random.boolean()
    let deceases = []
    for (let i = 0; i < 4; i++) {
        let decease = new DeceaseEntity()
        decease.name = faker.random.word()
        deceases.push(decease)
    }
    user.deceases = deceases
    await user.save()
    console.log(user.id)
}

runQuery()
    .then(() => {
        console.log('done')
        process.exit()
    })
    .catch(err => {
        console.error(err.message)
        process.exit()
    })
