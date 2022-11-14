import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dog } from './entities/dog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DogsService {
  constructor(@InjectRepository(Dog) private dogRepository: Repository<Dog>) {}
  create(createDogDto: CreateDogDto) {
    return this.dogRepository.save(createDogDto);
  }

  findAll() {
    return this.dogRepository.find();
  }

  findOne(id: number) {
    //return `This action returns a #${id} dog`;
    //return this.dogRepository.findOne({ id: 3 });
  }

  update(id: number, updateDogDto: UpdateDogDto) {
    //return `This action updates a #${id} dog`;
    return this.dogRepository.update({ id }, { ...updateDogDto });
  }

  delete(id: number) {
    //return `This action removes a #${id} dog`;
    return this.dogRepository.delete({ id });
  }
}
