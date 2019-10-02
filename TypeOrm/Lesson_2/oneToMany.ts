import { UserEntity } from '../../TypeOrm/Lesson_1/UserEntity'
import {
    createConnection,
    createQueryBuilder,
    getConnection,
    LessThan,
    Like,
    Raw,
} from 'typeorm'
import { DeceaseEntity } from './DeceaseEntity'

async function runQuery() {
    await createConnection()

    const take = 10
    let skip = 0

    const user = await UserEntity.findOneOrFail({
        where: {
            lastName: Raw(
                alias =>
                    `MATCH(lastName,firsName,bio) AGAINST ('+Beauty  +(>hack  <Rwanda)' IN BOOLEAN MODE )`,
            ),
        },
    })
    let user2 = new UserEntity()
    user.id = 1

    let d = new DeceaseEntity()
    d.name = 'Plague'
    d.userId = 2
    await d.save()
    d = new DeceaseEntity()
    d.name = 'Fewer'
    d.userId = 3
    await d.save()
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
