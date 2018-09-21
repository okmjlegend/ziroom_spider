import { Module } from '@nestjs/common';
import { SpiderController } from './controller/spider.controller';
import { SpiderService } from './service/spider.service';

@Module({
    imports: [],
    controllers: [SpiderController],
    providers: [SpiderService],
})
export class AppModule { }
