import { AuthChecker } from 'type-graphql'
import { Context } from './types/Context'
import * as jwt from 'jsonwebtoken'
import { SECRET } from '../../Express/Lesson_2/config'
import { UserEntity } from '../../TypeOrm/Lesson_1/UserEntity'

export const authChecker: AuthChecker<any> = (
    { context },
    roles,
) => {
    return context.user != null
}
