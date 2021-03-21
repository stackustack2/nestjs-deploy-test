import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entry } from './entry.entity';
import { EntrysService } from './entry.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Entry])
    ],
    providers: [
        EntrysService
    ],
    exports: [
        EntrysService
    ]
})
export class EntrysModule { }
