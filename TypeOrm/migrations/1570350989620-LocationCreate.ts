import {MigrationInterface, QueryRunner} from "typeorm";

export class LocationCreate1570350989620 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `points` (`id` int NOT NULL AUTO_INCREMENT, `location` point NOT NULL, `name` varchar(255) NOT NULL, SPATIAL INDEX `IDX_5612e9e115efa49690406661ca` (`location`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_5612e9e115efa49690406661ca` ON `points`", undefined);
        await queryRunner.query("DROP TABLE `points`", undefined);
    }

}
