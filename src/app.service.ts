import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    var t = new Date()
    return `Hello World @ ${new Date().toISOString()}`;
  }
}
