import { Controller, Get } from '@nestjs/common';
import { AttachmentServiceService } from '../attachment-service.service';

@Controller()
export class AttachmentServiceController {
  constructor(private readonly attachmentServiceService: AttachmentServiceService) {}

  @Get()
  getHello(): string {
    return this.attachmentServiceService.getHello();
  }
}
