import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  return port; // 👈 Retorna explícitamente el puerto
}

bootstrap()
  .then((port) => {
    // ✅ `port` ahora es `number` (ej: 3000)
    Logger.log(
      `✅ Servidor corriendo en http://localhost:${port}`,
      'Bootstrap',
    );
  })
  .catch((error) => {
    Logger.error('❌ Error al iniciar el servidor:', error, 'Bootstrap');
    process.exit(1);
  });
