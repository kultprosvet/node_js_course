import {MigrationInterface, QueryRunner} from "typeorm";

export class GroupsCreate1570117544663 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `groups` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, UNIQUE INDEX `IDX_664ea405ae2a10c264d582ee56` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `groups_users_users` (`groupsId` int NOT NULL, `usersId` int NOT NULL, INDEX `IDX_6320d5cbd6f7702b2e78d38d6b` (`groupsId`), INDEX `IDX_0f3881cfe1ef94b0e435d1d72f` (`usersId`), PRIMARY KEY (`groupsId`, `usersId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `groups_users_users` ADD CONSTRAINT `FK_6320d5cbd6f7702b2e78d38d6b8` FOREIGN KEY (`groupsId`) REFERENCES `groups`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `groups_users_users` ADD CONSTRAINT `FK_0f3881cfe1ef94b0e435d1d72f9` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `groups_users_users` DROP FOREIGN KEY `FK_0f3881cfe1ef94b0e435d1d72f9`", undefined);
        await queryRunner.query("ALTER TABLE `groups_users_users` DROP FOREIGN KEY `FK_6320d5cbd6f7702b2e78d38d6b8`", undefined);
        await queryRunner.query("DROP INDEX `IDX_0f3881cfe1ef94b0e435d1d72f` ON `groups_users_users`", undefined);
        await queryRunner.query("DROP INDEX `IDX_6320d5cbd6f7702b2e78d38d6b` ON `groups_users_users`", undefined);
        await queryRunner.query("DROP TABLE `groups_users_users`", undefined);
        await queryRunner.query("DROP INDEX `IDX_664ea405ae2a10c264d582ee56` ON `groups`", undefined);
        await queryRunner.query("DROP TABLE `groups`", undefined);
    }

}
