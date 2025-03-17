import { Module } from '@nestjs/common';
import { JobServiceController } from './controllers/job-service.controller';
import { JobServiceService } from './services/job-service.service';

@Module({
  imports: [],
  controllers: [JobServiceController],
  providers: [JobServiceService],
})
export class JobServiceModule {}
