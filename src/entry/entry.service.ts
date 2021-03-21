import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entry } from './entry.entity';

@Injectable()
export class EntrysService {
    constructor(
        @InjectRepository(Entry)
        private entryRepository: Repository<Entry>
    ) { }

    async findAll(): Promise<Entry[]> {
        return this.entryRepository.find()
    }

    async add(): Promise<Entry> {
        const newEntry = new Entry();
        newEntry.entry = `Hey! This entry was saved at ${new Date().toISOString()}`

        return this.entryRepository.save(newEntry)
    }
}