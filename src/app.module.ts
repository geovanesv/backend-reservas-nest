import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EventosModule } from './eventos/eventos.module';
import { ReservasModule } from './reservas/reservas.module';
import { UsersModule } from './users/users.module';
import dataSource from '../db/data-source';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...dataSource.options,
      }),
    }),
    EventosModule,
    ReservasModule,
    UsersModule,
  ],
})
export class AppModule {}
