import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventosService } from './eventos.service';
import { EventoEntity } from '../core/entitys/evento.entity';
import { EventoRepository } from 'src/core/repositories/evento.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EventoEntity])],
  providers: [EventosService, EventoRepository],
  exports: [EventosService, EventoRepository],
})
export class EventosModule {}
