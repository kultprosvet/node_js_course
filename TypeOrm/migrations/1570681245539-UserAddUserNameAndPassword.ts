import {MigrationInterface, QueryRunner} from "typeorm";

export class UserAddUserNameAndPassword1570681245539 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `users` ADD `username` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `users` ADD `password` varchar(255) NOT NULL", undefined);
        await queryRunner.query("CREATE INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users` (`username`)", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users`", undefined);
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `username`", undefined);
    }

}
