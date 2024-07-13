import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CORS } from './constants';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService)  

  app.enableCors(CORS)

  app.setGlobalPrefix('/api/')

  console.log("SERVICE", configService.get('PORT'))

  await app.listen(3000);
}
bootstrap();
