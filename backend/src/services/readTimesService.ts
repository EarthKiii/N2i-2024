import { ReadTimesRepository } from '../repositories/readTimesRepository.js';

export class ReadTimesService {
    private readonly readTimesRepository: ReadTimesRepository;

    constructor() {
        this.readTimesRepository = new ReadTimesRepository();
    }

    public async getAllReadTimes(): Promise< { popupId: string, averageReadTime: number }[] > {
        return this.readTimesRepository.getAllReadTimes();
    }

    public async getReadTime(popupId: string): Promise< { popupId: string, averageReadTime: number } > {
        return this.readTimesRepository.getReadTime(popupId);
    }

    public async postReadTime(popupId: string, readTime: number) {
        return this.readTimesRepository.postReadTime(popupId, readTime);
    }
}
