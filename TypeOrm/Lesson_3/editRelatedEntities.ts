import { UserEntity } from '../../TypeOrm/Lesson_1/UserEntity'
import {
    createConnection,
    createQueryBuilder,
    getConnection,
    LessThan,
    Like,
    Raw,
} from 'typeorm'
//import { DeceaseEntity } from './DeceaseEntity'

async function runQuery() {
    await createConnection()
    let user = await UserEntity.findOneOrFail({
        where: { id: 553754 },
        relations: ['deceases'],
    })
    user.deceases[0].name = 'Super flue'
    await user.save()
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
