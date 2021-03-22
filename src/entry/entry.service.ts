import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as puppeteer from 'puppeteer'
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
        const PRICE = ".ty-product-block__price-actual .ty-price-update .ty-price bdi .ty-price-num:first-of-type"

        const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
        const page = await browser.newPage();

        await page.goto('https://www.riskmadeinwarsaw.com/en/clothes-category/blouses/pure-bliss-long-sleeve-art-blue');

        const price = await page.evaluate((PRICE) => {
            return document
                .querySelector(PRICE)
                .textContent
        }, PRICE);

        await browser.close();

        newEntry.entry = price.toString()

        return this.entryRepository.save(newEntry)
    }
}