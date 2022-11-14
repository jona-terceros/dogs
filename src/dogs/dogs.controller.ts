import { Controller, Get, Post, Body, Patch, Param, Delete, Put, } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogsService.create(createDogDto);
  }

  @Get()
  findAll() {
    return this.dogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.dogsService.findOne(+id);
  }

  //@Patch(':id')
  //update(@Param('id') id: number, @Body() updateDogDto: UpdateDogDto) {
  //  return this.dogsService.update(+id, updateDogDto);
  //}
  @Put(':id')
  async UpdateDogDto(
    @Param('id') id: number,
    @Body() updateDogDto: UpdateDogDto,
  ) {
    await this.dogsService.update(id, updateDogDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.dogsService.delete(id);
  }
}
