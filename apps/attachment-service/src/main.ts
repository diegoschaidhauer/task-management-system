import { NestFactory } from '@nestjs/core';
import { AttachmentServiceModule } from './services/attachment-service.module';

async function bootstrap() {
  const app = await NestFactory.create(AttachmentServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
