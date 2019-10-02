import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateUsersIndexed1569739873440
    implements MigrationInterface {
    public async up(
        queryRunner: QueryRunner,
    ): Promise<any> {
        await queryRunner.query(
            "CREATE TABLE `users_indexed` (`id` int NOT NULL AUTO_INCREMENT, `lastName` varchar(255) NOT NULL, `firsName` varchar(255) NOT NULL, `birthDay` date NOT NULL, `isActive` tinyint NOT NULL, `bio` text NULL, `expirience` int NOT NULL, `gender` enum ('male', 'female') NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB",
            undefined,
        )
        await queryRunner.query(
            'INSERT users_indexed SELECT * FROM users;',
        )
    }

    public async down(
        queryRunner: QueryRunner,
    ): Promise<any> {
        await queryRunner.query(
            'DROP TABLE `users_indexed`',
            undefined,
        )
    }
}
