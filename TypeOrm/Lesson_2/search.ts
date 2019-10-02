import { UserEntity } from '../../TypeOrm/Lesson_1/UserEntity'
import {
    createConnection,
    createQueryBuilder,
    getConnection,
    LessThan,
    Like,
    Raw,
} from 'typeorm'

async function runQuery() {
    await createConnection()
    console.time('male count')
    await UserEntity.count({
        where: {
            //gender: 'male',
            expirience: LessThan(50),
        },
    })

    console.timeEnd('male count')
    /*
    let res = await getConnection().query(
        'SELECT * FROM learning.users where \n' +
            "MATCH(lastName,firsName,bio) AGAINST ('+Beauty  +(>hack  <Rwanda)' IN BOOLEAN MODE )\n",
    )
    console.log(res)
*/
    console.time('full-text')
    await UserEntity.count({
        where: {
            lastName: Raw(
                alias =>
                    `MATCH(lastName,firsName,bio) AGAINST ('+Beauty  +(>hack  <Rwanda)' IN BOOLEAN MODE )`,
            ),
        },
    })

    console.timeEnd('full-text')
    const take = 10
    let skip = 0
    let res = []
    do {
        res = await UserEntity.find({
            where: {
                lastName: Raw(
                    alias =>
                        `MATCH(lastName,firsName,bio) AGAINST ('+Beauty  +(>hack  <Rwanda)' IN BOOLEAN MODE )`,
                ),
            },
            take,
            skip,
        })
        skip += take
        console.log('records ' + skip)
    } while (res.length > 0)

    /*
    console.time('like unindexed')
    await UserIndexedEntity.find({
        where: {
            lastName: Like('Man%'),
        },
    })
    console.timeEnd('like unindexed')
     */
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
