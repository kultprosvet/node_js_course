import {MigrationInterface, QueryRunner} from "typeorm";

export class UserNullable1570680575437 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_3c1bcbcdf9ca26170c8ec77d0a` ON `users`", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `birthDay` `birthDay` date NULL", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `expirience` `expirience` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `gender` `gender` enum ('male', 'female') NULL", undefined);
        await queryRunner.query("CREATE INDEX `IDX_3c1bcbcdf9ca26170c8ec77d0a` ON `users` (`expirience`, `gender`)", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_3c1bcbcdf9ca26170c8ec77d0a` ON `users`", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `gender` `gender` enum ('male', 'female') NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `expirience` `expirience` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `birthDay` `birthDay` date NOT NULL", undefined);
        await queryRunner.query("CREATE INDEX `IDX_3c1bcbcdf9ca26170c8ec77d0a` ON `users` (`expirience`, `gender`)", undefined);
    }

}
