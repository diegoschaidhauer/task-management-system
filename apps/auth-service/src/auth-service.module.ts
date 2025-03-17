import { Module } from '@nestjs/common';
import { AuthServiceController } from './controllers/auth-service.controller';
import { AuthServiceService } from './services/auth-service.service';

@Module({
  imports: [],
  controllers: [AuthServiceController],
  providers: [AuthServiceService],
})
export class AuthServiceModule {}
