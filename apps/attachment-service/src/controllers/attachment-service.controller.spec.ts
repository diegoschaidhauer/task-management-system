import { Test, TestingModule } from '@nestjs/testing';
import { AttachmentServiceController } from './attachment-service.controller';
import { AttachmentServiceService } from '../attachment-service.service';

describe('AttachmentServiceController', () => {
  let attachmentServiceController: AttachmentServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AttachmentServiceController],
      providers: [AttachmentServiceService],
    }).compile();

    attachmentServiceController = app.get<AttachmentServiceController>(AttachmentServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(attachmentServiceController.getHello()).toBe('Hello World!');
    });
  });
});
