import { Module } from '@nestjs/common';
import { SachDemoController } from './sach-demo.controller';
import { SachDemoService } from './sach-demo.service';

@Module({
  controllers: [SachDemoController],
  providers: [SachDemoService]
})
export class SachDemoModule {}
