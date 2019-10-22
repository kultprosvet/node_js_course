import {
    Arg,
    Authorized,
    Ctx,
    FieldResolver,
    Int,
    Mutation,
    Query,
    Resolver,
    Root,
} from 'type-graphql'
import { UserGQL } from '../types/UserGQL'
import { UserInputGQL } from '../types/UserInputGQL'
import { UserEntity } from '../../../TypeOrm/Lesson_1/UserEntity'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { SECRET } from '../../../Express/Lesson_2/config'
import { Context } from '../types/Context'
import { ApolloError } from 'apollo-server'
import { GroupEntity } from '../../../TypeOrm/Lesson_3/GroupEntity'
import { createQueryBuilder } from 'typeorm'
import * as DataLoader from 'dataloader'
@Resolver(type => UserGQL)
export class UserResolver {
    groupLoader = new DataLoader(
        async (ids: number[]): Promise<GroupEntity[][]> => {
            console.log('ids', ids)
            const groups = await createQueryBuilder(
                GroupEntity,
                'group',
            )
                .leftJoinAndSelect('group.users', 'user')
                .where(`user.id in (${ids.join(',')})`)
                .getMany()
            // Separate groups by user id
            const map: {
                [key: string]: GroupEntity[]
            } = {}
            for (const id of ids) {
                map[id] = []
            }
            for (const group of groups) {
                for (const user of group.users) {
                    map[user.id].push(group)
                }
            }
            const out = []
            for (const id of ids) {
                out.push(map[id])
            }
            return out
        },
    )

    @Mutation(returns => UserGQL)
    async signUp(
        @Arg('data', type => UserInputGQL)
        data: UserInputGQL,
    ) {
        const user = new UserEntity()
        user.username = data.username
        user.lastName = data.lastName
        user.firsName = data.firstName
        user.password = bcrypt.hashSync(data.password, 10)
        await user.save()

        user.token = this.getJWTToken(user)
        return user
    }
    @Mutation(returns => UserGQL)
    async login(
        @Arg('username') username: string,
        @Arg('password') password: string,
    ) {
        const user = await UserEntity.findOneOrFail({
            where: { username },
        })
        if (!bcrypt.compareSync(password, user.password)) {
            throw new ApolloError(
                'Wrong phone or password',
                'WRONG_CREDENTIALS',
            )
        }
        user.token = this.getJWTToken(user)
        return user
    }
    @Query(returns => UserGQL)
    @Authorized()
    async me(@Ctx() context: Context) {
        return UserEntity.findOneOrFail({
            where: {
                id: context.user.id,
            },
        })
    }

    getJWTToken(user: UserEntity): string {
        return jwt.sign(
            {
                data: { id: user.id },
            },
            SECRET,
            {
                expiresIn: `10 days`,
            },
        )
    }
    @FieldResolver()
    async groups(
        @Root() user: UserEntity,
        @Arg('limit', type => Int, { nullable: true })
        limit: number,
    ) {
        return this.groupLoader.load(user.id)
        /*
        const groups = await createQueryBuilder(
            GroupEntity,
            'group',
        )
            .leftJoin('group.users', 'users')
            .where('users.id=:id', { id: user.id })
            .take(limit || 0)
            .getMany()
        return groups*/
    }
    @FieldResolver()
    async deceases(@Root() user: UserEntity) {
        return await createQueryBuilder(UserEntity)
            .relation('deceases')
            .of(user)
            .loadMany()
    }
    @Query(returns => [UserGQL])
    async getUserList(
        @Arg('skip', type => Int, { defaultValue: 0 })
        skip: number,
        @Arg('take', type => Int, { defaultValue: 10 })
        take: number,
    ) {
        return await UserEntity.find({ take, skip })
    }
}
