import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateDecease1569946087791
    implements MigrationInterface {
    public async up(
        queryRunner: QueryRunner,
    ): Promise<any> {
        await queryRunner.query(
            'CREATE TABLE `deceases` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
            undefined,
        )
        await queryRunner.query(
            'ALTER TABLE `deceases` ADD CONSTRAINT `FK_b8cd7ca694a307adcea27fdd583` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
            undefined,
        )
    }

    public async down(
        queryRunner: QueryRunner,
    ): Promise<any> {
        await queryRunner.query(
            'ALTER TABLE `deceases` DROP FOREIGN KEY `FK_b8cd7ca694a307adcea27fdd583`',
            undefined,
        )
        await queryRunner.query(
            'DROP TABLE `deceases`',
            undefined,
        )
    }
}
