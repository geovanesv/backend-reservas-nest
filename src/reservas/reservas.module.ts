import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservasService } from './reservas.service';
import { ReservaEntity } from '../core/entitys/reservas.entity';
import { EventosModule } from '../eventos/eventos.module';
import { ReservasRepository } from 'src/core/repositories/reservas.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ReservaEntity]), EventosModule],
  providers: [ReservasService, ReservasRepository],
  exports: [ReservasService, ReservasRepository],
})
export class ReservasModule {}
