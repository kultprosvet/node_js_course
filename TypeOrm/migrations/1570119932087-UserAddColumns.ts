import {MigrationInterface, QueryRunner} from "typeorm";

export class UserAddColumns1570119932087 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user_groups` (`groupsId` int NOT NULL, `usersId` int NOT NULL, INDEX `IDX_283e36ff3f2c3afe7e3488ac3e` (`groupsId`), INDEX `IDX_b184a9372d30d296d40638f8a8` (`usersId`), PRIMARY KEY (`groupsId`, `usersId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `isActive` `isActive` tinyint NOT NULL DEFAULT 1", undefined);
        await queryRunner.query("ALTER TABLE `user_groups` ADD CONSTRAINT `FK_283e36ff3f2c3afe7e3488ac3eb` FOREIGN KEY (`groupsId`) REFERENCES `groups`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `user_groups` ADD CONSTRAINT `FK_b184a9372d30d296d40638f8a8e` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user_groups` DROP FOREIGN KEY `FK_b184a9372d30d296d40638f8a8e`", undefined);
        await queryRunner.query("ALTER TABLE `user_groups` DROP FOREIGN KEY `FK_283e36ff3f2c3afe7e3488ac3eb`", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `isActive` `isActive` tinyint NOT NULL", undefined);
        await queryRunner.query("DROP INDEX `IDX_b184a9372d30d296d40638f8a8` ON `user_groups`", undefined);
        await queryRunner.query("DROP INDEX `IDX_283e36ff3f2c3afe7e3488ac3e` ON `user_groups`", undefined);
        await queryRunner.query("DROP TABLE `user_groups`", undefined);
    }

}
