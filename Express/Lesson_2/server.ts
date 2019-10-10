import * as express from 'express'
import { createConnection } from 'typeorm'
import { Request, Response } from 'express'
import * as bcrypt from 'bcrypt'
import { UserEntity } from '../../TypeOrm/Lesson_1/UserEntity'
import * as jwt from 'jsonwebtoken'
import { SECRET } from './config'
import { userMidleware } from './userMidlware'

const app = express()
app.use(express.json())
app.use(userMidleware(['/me', '/current-user', '/users']))
app.post('/signup', async (req: Request, res: Response) => {
    console.log(req.body)
    const data = req.body
    const user = new UserEntity()
    user.username = data.username
    user.lastName = data.lastName
    user.firsName = data.firstName
    user.password = bcrypt.hashSync(data.password, 10)
    await user.save()
    const token = jwt.sign(
        {
            data: { id: user.id },
        },
        SECRET,
        {
            expiresIn: `10 days`,
        },
    )
    res.json({ token })
})
app.get('/me', async (req: Request, res: Response) => {
    res.json(req['user'])
})
app.get('/users', async (req: Request, res: Response) => {
    res.json({ user: [] })
})
app.delete(
    '/current-user',
    async (req: Request, res: Response) => {
        await UserEntity.delete({
            id: req['user'].id,
        })
        res.json({ message: 'user deleted' })
    },
)
async function startServer(): Promise<void> {
    await createConnection()
    app.listen(8080, () => {
        console.log('server started')
    })
}

startServer()
    .then(() => {})
    .catch(e => {
        console.log('Unable connect to db', e)
    })
