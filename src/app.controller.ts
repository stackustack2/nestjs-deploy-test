import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EntrysService } from './entry/entry.service';

@Controller()
export class AppController {
  constructor(
    private readonly entryService: EntrysService
  ) { }

  @Get()
  getEntrys() {
    return this.entryService.findAll();
  }

  @Post()
  newEntry() {
    return this.entryService.add()
  }


}
