import { Injectable } from '@nestjs/common';

@Injectable()
export class SpiderService {
    root(): Object {
        return {
            text: 'Hello World!',
        };
    }
}
