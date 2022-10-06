import { Module } from '@nestjs/common';
import { ArchiveController } from './archive.controller';
import { ArchiveService } from './archive.service';

@Module({
  providers: [ArchiveService],
  controllers: [ArchiveController],
})
export class ArchiveModule {}
