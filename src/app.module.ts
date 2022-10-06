import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArchiveModule } from './archive/archive.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [NotesModule, ArchiveModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
