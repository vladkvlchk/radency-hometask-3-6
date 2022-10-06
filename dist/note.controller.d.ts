import { AppService } from './app.service';
export declare class NoteController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
}
