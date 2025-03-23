import { Injectable } from '@nestjs/common';
import { Repository, EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { ReservaEntity } from '../entitys/reservas.entity';

@Injectable()
export class ReservasRepository extends Repository<ReservaEntity> {
  constructor(
    @InjectEntityManager() private readonly entityManager: EntityManager,
  ) {
    super(ReservaEntity, entityManager);
  }
}
