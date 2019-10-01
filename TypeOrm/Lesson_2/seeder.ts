import * as faker from 'faker'
import { UserEntity } from '../../TypeOrm/Lesson_1/UserEntity'
import { createConnection, QueryBuilder } from 'typeorm'
import { createQueryBuilder } from 'typeorm'

async function runQuery() {
    await createConnection()
    let users = []
    for (let i = 0; i < 500000; i++) {
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
        users.push(user)
        if (users.length % 500 === 0) {
            await createQueryBuilder(UserEntity)
                .insert()
                .values(users)
                .execute()
            users = []
            console.log(i)
        }
    }
    if (users.length > 0)
        await createQueryBuilder(UserEntity)
            .insert()
            .values(users)
            .execute()
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
