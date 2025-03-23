import { Injectable } from '@nestjs/common';
import { Repository, EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { UserEntity } from '../entitys/user.entity';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(
    @InjectEntityManager() private readonly entityManager: EntityManager,
  ) {
    super(UserEntity, entityManager);
  }
}
