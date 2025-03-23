import { Injectable } from '@nestjs/common';
import { Repository, EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EventoEntity } from '../entitys/evento.entity';

@Injectable()
export class EventoRepository extends Repository<EventoEntity> {
  constructor(
    @InjectEntityManager() private readonly entityManager: EntityManager,
  ) {
    super(EventoEntity, entityManager);
  }
}
