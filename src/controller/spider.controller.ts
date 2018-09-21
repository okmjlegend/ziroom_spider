import { Post, Controller, Req, Query } from '@nestjs/common';
import { SpiderService } from '../service/spider.service';

@Controller('/api')
export class SpiderController {
    private readonly spiderService: SpiderService;

    constructor(SpiderService: SpiderService) {
        this.spiderService = SpiderService;
    }

    @Post('/spider')
    root(@Req() request, @Query('id') id): Object {
        return this.spiderService.root();
    }
}
