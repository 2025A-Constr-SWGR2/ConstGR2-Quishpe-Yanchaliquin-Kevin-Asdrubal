import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private readonly configService: ConfigService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('database')
  getDatabaseConection() {
    return {
      DB_HOST: this.configService.get<string>('DB_HOST'),
      DB_PASSWORD: this.configService.get<string>('DB_PASSWORD'),
      DB_NAME: this.configService.get<string>('DB_NAME'),
      DB_USER: process.env.DB_USER,
    };
    
  }
  
}
