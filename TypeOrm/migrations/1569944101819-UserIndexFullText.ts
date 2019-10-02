import {MigrationInterface, QueryRunner} from "typeorm";

export class UserIndexFullText1569944101819 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE FULLTEXT INDEX `IDX_634ef4794d5e2f23bfcec45788` ON `users` (`lastName`, `firsName`, `bio`)", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_634ef4794d5e2f23bfcec45788` ON `users`", undefined);
    }

}
