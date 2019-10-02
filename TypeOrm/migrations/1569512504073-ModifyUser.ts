import {MigrationInterface, QueryRunner} from "typeorm";

export class ModifyUser1569512504073 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `users` ADD `gender` enum ('male', 'female') NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `bio` `bio` text NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `users` CHANGE `bio` `bio` text NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `gender`", undefined);
    }

}
