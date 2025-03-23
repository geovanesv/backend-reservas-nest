import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ReservaEntity } from './reservas.entity';

@Entity('eventos')
export class EventoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  local: string;

  @Column()
  data: Date;

  @Column()
  capacidade: number;

  @Column({ default: 0 })
  reservasAtuais: number;

  @OneToMany(() => ReservaEntity, (reserva) => reserva.evento)
  reservas: ReservaEntity[];
}
