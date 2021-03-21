import { Repository } from 'typeorm';
import { Entry } from './entry.entity';
export declare class EntrysService {
    private entryRepository;
    constructor(entryRepository: Repository<Entry>);
    findAll(): Promise<Entry[]>;
    add(): Promise<Entry>;
}
