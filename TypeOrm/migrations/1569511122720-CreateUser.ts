import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUser1569511122720 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `lastName` varchar(255) NOT NULL, `firsName` varchar(255) NOT NULL, `birthDay` date NOT NULL, `isActive` tinyint NOT NULL, `bio` text NOT NULL, `expirience` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `users`", undefined);
    }

}
