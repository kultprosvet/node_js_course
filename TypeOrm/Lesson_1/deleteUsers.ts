import { createConnection, MoreThan } from 'typeorm'
import { UserEntity } from './UserEntity'

async function runQuery() {
    await createConnection()
    let user = await UserEntity.findOne({ id: 1 })
    // await user.remove()
    await UserEntity.delete({ id: MoreThan(2) })
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
