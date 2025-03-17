import { Module } from '@nestjs/common';
import { MonitoringServiceController } from './monitoring-service.controller';
import { MonitoringServiceService } from './services/monitoring-service.service';

@Module({
  imports: [],
  controllers: [MonitoringServiceController],
  providers: [MonitoringServiceService],
})
export class MonitoringServiceModule {}
