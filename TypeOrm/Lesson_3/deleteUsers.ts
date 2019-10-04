import { createConnection, MoreThan } from 'typeorm'
import { UserEntity } from '../Lesson_1/UserEntity'

async function runQuery() {
    await createConnection()
    await UserEntity.delete({ id: 21193 })
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
