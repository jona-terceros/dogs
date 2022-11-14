import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { Dog } from './entities/dog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [DogsController],
  providers: [DogsService],
  imports: [TypeOrmModule.forFeature([Dog])]
})
export class DogsModule {}
