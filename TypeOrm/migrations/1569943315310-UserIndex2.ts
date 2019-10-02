import {MigrationInterface, QueryRunner} from "typeorm";

export class UserIndex21569943315310 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_3b810c99fae8b4b46555c8bdfc` ON `users`", undefined);
        await queryRunner.query("DROP INDEX `IDX_f8a6de243ffb7c3f3b09bcbbb3` ON `users`", undefined);
        await queryRunner.query("CREATE INDEX `IDX_3c1bcbcdf9ca26170c8ec77d0a` ON `users` (`expirience`, `gender`)", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_3c1bcbcdf9ca26170c8ec77d0a` ON `users`", undefined);
        await queryRunner.query("CREATE INDEX `IDX_f8a6de243ffb7c3f3b09bcbbb3` ON `users` (`expirience`)", undefined);
        await queryRunner.query("CREATE INDEX `IDX_3b810c99fae8b4b46555c8bdfc` ON `users` (`gender`)", undefined);
    }

}
