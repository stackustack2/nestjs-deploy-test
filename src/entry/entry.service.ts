import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as puppeteer from 'puppeteer'
import { Entry } from './entry.entity';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class EntrysService {
    private readonly logger = new Logger(EntrysService.name);

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
        const dateStamp = new Date().toISOString()

        const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
        const page = await browser.newPage();
        await page.goto('https://www.riskmadeinwarsaw.com/en/clothes-category/blouses/pure-bliss-long-sleeve-art-blue');

        const price = await page.evaluate((PRICE) => {
            return document
                .querySelector(PRICE)
                .textContent
        }, PRICE);

        await browser.close();

        newEntry.entry = `Price at ${dateStamp}: ${price.toString()}PLN`

        return this.entryRepository.save(newEntry)
    }

    @Cron('*/28 * * * *') // Every 28th minute (also to keep Heroku from idling)
    async handleCron() {

        const newEntry = new Entry();
        const PRICE = ".ty-product-block__price-actual .ty-price-update .ty-price bdi .ty-price-num:first-of-type"
        const dateStamp = new Date().toISOString()

        const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
        const page = await browser.newPage();
        await page.goto('https://www.riskmadeinwarsaw.com/en/clothes-category/blouses/pure-bliss-long-sleeve-art-blue');

        const price = await page.evaluate((PRICE) => {
            return document
                .querySelector(PRICE)
                .textContent
        }, PRICE);

        await browser.close();

        newEntry.entry = `[Created by CRON] Price at ${dateStamp}: ${price.toString()}PLN`
    }
}