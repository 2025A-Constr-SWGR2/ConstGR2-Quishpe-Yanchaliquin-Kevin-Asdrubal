import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.warn('warn!'); // ✅ Permitido
    console.error('error!'); // ✅ Permitido
    return 'Hello World!';
  }
}
