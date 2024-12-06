import { ScoresRepository } from '../repositories/ScoresRepository.js';

export class ScoresService {
    private readonly scoresRepository: ScoresRepository;

    constructor() {
        this.scoresRepository = new ScoresRepository();
    }

    public async getScores(): Promise<number> {
        return this.scoresRepository.getScores();
    }

    public async postScore(scores: number): Promise<number> {
        return this.scoresRepository.postScore();
    }

}
