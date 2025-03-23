import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Eventos1742757780764 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'evento',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nome',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'local',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'data',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'capacidade',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'reservasAtuais',
            type: 'int',
            isNullable: false,
            default: '0',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('evento');
  }
}
