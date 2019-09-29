import { createConnection } from 'typeorm'
import { UserEntity } from './UserEntity'

async function runQuery() {
    await createConnection()
    let user = await UserEntity.findOne({ id: 1 })
    user.bio = 'Modified'
    user.isActive = false
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
