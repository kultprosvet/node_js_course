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
import { GroupEntity } from './GroupEntity'
//import { DeceaseEntity } from './DeceaseEntity'

async function runQuery() {
    await createConnection()
    for (let i = 0; i < 10; i++) {
        let group = new GroupEntity()
        group.name = `Group ${i}`
        await group.save()
        let ids = []
        for (let j = 0; j < 10; j++) {
            ids.push(
                faker.random.number({
                    min: 1,
                    max: 500000,
                }),
            )
        }
        createQueryBuilder(GroupEntity)
            .relation('users')
            .of(group)
            .add(ids)
    }
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
