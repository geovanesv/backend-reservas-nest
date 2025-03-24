import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { EventoEntity } from './evento.entity';

@Entity('reservas')
export class ReservaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cliente: string;

  @Column({ type: 'enum', enum: ['pendente', 'confirmada', 'cancelada'] })
  status: string;

  @ManyToOne(() => EventoEntity, (evento) => evento.reservas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'evento_id' })
  evento: EventoEntity;
}
