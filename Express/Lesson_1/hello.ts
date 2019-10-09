//@ts-ignore
import * as express from 'express'
import { Request, Response } from 'express'
const app = express()

app.get(/book.*/, (req: Request, res: Response) => {
    res.send('Book')
})

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})
app.post('/form', (req: Request, res: Response) => {
    res.json({ message: 'Form subitted' })
})
app.delete(
    '/user/:userId',
    (req: Request, res: Response) => {
        res.send('User deleted' + req.params.userId)
    },
)
app.patch('/user', (req: Request, res: Response) => {
    res.send('User updated')
})

app.listen(8080, () => {
    console.log('server started')
})

app.use(
    '/images',
    express.static('Express/Lesson_1/public'),
)
