import { EntrysService } from './entry/entry.service';
export declare class AppController {
    private readonly entryService;
    constructor(entryService: EntrysService);
    getEntrys(): Promise<import("./entry/entry.entity").Entry[]>;
    newEntry(): Promise<import("./entry/entry.entity").Entry>;
}
