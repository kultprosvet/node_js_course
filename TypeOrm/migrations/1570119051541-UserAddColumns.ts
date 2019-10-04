import {MigrationInterface, QueryRunner} from "typeorm";

export class UserAddColumns1570119051541 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `users` ADD `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)", undefined);
        await queryRunner.query("ALTER TABLE `users` ADD `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)", undefined);
        await queryRunner.query("ALTER TABLE `users` ADD `version` int NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `version`", undefined);
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `updatedAt`", undefined);
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `createdAt`", undefined);
    }

}
