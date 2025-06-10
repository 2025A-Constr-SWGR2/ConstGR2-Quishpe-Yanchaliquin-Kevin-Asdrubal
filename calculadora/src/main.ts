import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then((port) => {
    Logger.log(
      `✅ Servidor corriendo en http://localhost:${port}`,
      'Bootstrap',
    );
  })
  .catch((error) => {
    Logger.error('❌ Error al iniciar el servidor:', error, 'Bootstrap');
    process.exit(1);
  });
