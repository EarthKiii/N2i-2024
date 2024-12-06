import { ReadTimesRepository } from '../repositories/ReadTimesRepository.js';

export class ReadTimesService {
    private readonly readTimesRepository: ReadTimesRepository;

    constructor() {
        this.readTimesRepository = new ReadTimesRepository();
    }

    public async getAllReadTimes(): Promise<number> {
        return this.readTimesRepository.getAllReadTimes();
    }

    public async getReadTime(popupId: string): Promise<number> {
        return this.readTimesRepository.getReadTime(popupId);
    }

    public async postReadTime(popupId: string, readTime: number): Promise<number> {
        return this.readTimesRepository.postReadTime(popupId, readTime);
    }
}
