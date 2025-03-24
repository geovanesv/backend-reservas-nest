// import { MigrationInterface, QueryRunner } from "typeorm";

// export class  implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//     }

// }

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Reservas1742816409457 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'reservas',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'cliente',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['pendente', 'confirmada', 'cancelada'],
            default: "'pendente'",
          },
          {
            name: 'eventoId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['eventoId'],
            referencedTableName: 'eventos',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('reservas');
  }
}
