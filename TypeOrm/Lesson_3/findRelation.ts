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

    let users = await createQueryBuilder(
        UserEntity,
        'users',
    )
        .leftJoin('users.groups', 'groups')
        .andWhere('groups.name=:name', {
            name: 'Group 0',
        })
        .getCount()
    console.log(users)

    let groups = await createQueryBuilder(
        GroupEntity,
        'groups',
    )
        .leftJoin('groups.users', 'users')
        .andWhere('users.id = :id', {
            id: 9278,
        })
        .getCount()
    console.log(groups)
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
