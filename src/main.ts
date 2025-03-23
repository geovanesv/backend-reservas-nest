import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Carrega as variáveis de ambiente do arquivo .env

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
