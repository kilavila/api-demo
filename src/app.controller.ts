import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { EntryFormDTO } from './dto/entry-form.dto';
import { EntryDTO } from './dto/entry.dto';
import { ApiGuard } from './guards/api.guard';

// http://localhost:3000/all

@Controller()
export class AppController {

  constructor(private appService: AppService) { }

  @Get('/status')
  status(): string {
    return this.appService.status();
  }

  @UseGuards(ApiGuard)
  @Post('/create')
  async create(@Body() body: EntryFormDTO): Promise<EntryDTO> {
    return await this.appService.create(body);
  }

  @Get('/all')
  async findAll(): Promise<EntryDTO[]> {
    return await this.appService.findAll();
  }

  @Get('/id/:id')
  async findOne(@Param('id') id: string): Promise<EntryDTO> {
    return await this.appService.findOne(id);
  }

  @UseGuards(ApiGuard)
  @Delete('/delete/:id')
  async deleteOne(@Param('id') id: string): Promise<EntryDTO> {
    return await this.appService.deleteOne(id);
  }

}
