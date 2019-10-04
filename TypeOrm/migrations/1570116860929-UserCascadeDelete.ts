import {MigrationInterface, QueryRunner} from "typeorm";

export class UserCascadeDelete1570116860929 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `deceases` DROP FOREIGN KEY `FK_b8cd7ca694a307adcea27fdd583`", undefined);
        await queryRunner.query("ALTER TABLE `deceases` ADD CONSTRAINT `FK_b8cd7ca694a307adcea27fdd583` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `deceases` DROP FOREIGN KEY `FK_b8cd7ca694a307adcea27fdd583`", undefined);
        await queryRunner.query("ALTER TABLE `deceases` ADD CONSTRAINT `FK_b8cd7ca694a307adcea27fdd583` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

}
