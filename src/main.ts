import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  /* generate next API by passing in the root of the applciation
  - AppModule is the root of the application
   */
  const app = await NestFactory.create(AppModule);

  /* listen to the specific port */
  await app.listen(3000);
}

/* runs the nest API */
bootstrap();
