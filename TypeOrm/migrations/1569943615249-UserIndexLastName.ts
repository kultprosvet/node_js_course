import {MigrationInterface, QueryRunner} from "typeorm";

export class UserIndexLastName1569943615249 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE INDEX `IDX_af99afb7cf88ce20aff6977e68` ON `users` (`lastName`)", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_af99afb7cf88ce20aff6977e68` ON `users`", undefined);
    }

}
