import { UserEntity } from './UserEntity'
//import 'reflect-metadata'
import {
    Between,
    createConnection,
    createQueryBuilder,
    LessThan,
} from 'typeorm'
async function runQuery() {
    await createConnection()
    let users = await UserEntity.find({
        where: { id: 12323 },
    })
    //console.log(users)
    let user = await UserEntity.findOneOrFail({
        where: { id: 1 },
        order: {
            id: 'DESC',
        },
    })
    //console.log(user.expirience)
    let query = createQueryBuilder(UserEntity)
    users = await query.getRawMany()
    // console.log(query.getSql())
    users = await UserEntity.find({
        where: {
            gender: 'male',
            id: 1,
        },
    })
    console.log('AND', users)
    users = await UserEntity.find({
        where: [
            {
                gender: 'male',
            },
            { id: 1 },
        ],
    })
    console.log('OR', users)
    users = await UserEntity.find({
        where: { birthDay: LessThan('2018-01-01') },
    })
    console.log('Born before 2018', users)
    users = await UserEntity.find({
        where: { expirience: Between(1, 15) },
    })
    console.log('Expirience between', users)
    let res: any = await createQueryBuilder(UserEntity)
        .where('expirience>:min and expirience<:max', {
            min: 1,
            max: 15,
        })
        .getManyAndCount()
    console.log('Expirience between', res)
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
