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
        where: { id: 2 },
        relations: ['deceases'],
    })

    // let deceases = await user.deceases
    //console.log(user.deceases)
    user = await createQueryBuilder(UserEntity, 'user')
        .leftJoinAndSelect('user.deceases', 'deceases')
        .getOne()
    console.log(user)
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
