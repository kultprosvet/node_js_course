import { UserEntity } from './UserEntity'
//import 'reflect-metadata'
import { createConnection } from 'typeorm'
createConnection().then(() => {
    let user = new UserEntity()
    user.lastName = 'Bitle'
    user.firsName = 'Joe'
    user.isActive = true
    user.birthDay = new Date()
    user.gender = 'male'
    user.expirience = 10
    user.save()
        .then(() => {
            console.log('user saved')
            process.exit()
        })
        .catch(err => {
            console.error(err.message)
            process.exit()
        })
})
