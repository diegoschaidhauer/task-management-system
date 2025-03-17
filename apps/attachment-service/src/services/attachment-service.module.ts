import { Module } from '@nestjs/common';
import { AttachmentServiceController } from '../controllers/attachment-service.controller';
import { AttachmentServiceService } from '../attachment-service.service';

@Module({
  imports: [],
  controllers: [AttachmentServiceController],
  providers: [AttachmentServiceService],
})
export class AttachmentServiceModule {}
