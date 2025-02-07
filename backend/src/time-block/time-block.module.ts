import { Module } from '@nestjs/common';
import {TimeBlockService } from './time-block.service';
import { TimeBockController  } from './time-block.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TimeBockController],
  providers: [TimeBlockService, PrismaService],
  exports:[TimeBlockService]
})
export class TimeBlockModule {}
