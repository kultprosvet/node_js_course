//@ts-ignore
import * as express from 'express'
const app = express()

app.get(/book.*/, (req: any, res: any) => {
    res.send('Book')
})

app.get('/', (req: any, res: any) => {
    res.send('Hello World!')
})
app.post('/form', (req: any, res: any) => {
    res.json({ message: 'Form subitted' })
})
app.delete('/user/:userId', (req: any, res: any) => {
    res.send('User deleted' + req.params.userId)
})
app.patch('/user', (req: any, res: any) => {
    res.send('User updated')
})

app.listen(8080, () => {
    console.log('server started')
})

app.use(
    '/images',
    express.static('Express/Lesson_1/public'),
)
