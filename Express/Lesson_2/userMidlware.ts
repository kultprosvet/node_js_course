import * as jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import { SECRET } from './config'
import { UserEntity } from '../../TypeOrm/Lesson_1/UserEntity'
export function userMidleware(protectedMethods: string[]) {
    return async function(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
        const path = req.path
        if (!protectedMethods.includes(path)) {
            next()
            return
        }
        try {
            let token = req.headers.authorization
            token = token.slice(7, token.length)
            if (jwt.verify(token, SECRET)) {
                const data = jwt.decode(token)
                const user = await UserEntity.findOne({
                    select: ['id', 'username'],
                    where: { id: data.data.id },
                })
                req['user'] = user
            }
            next()
        } catch (e) {
            res.status(403)
            res.json({ error: 'you are not authorized!' })
        }
    }
}
