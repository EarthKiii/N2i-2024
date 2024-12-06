import { ScoresRepository } from '../repositories/ScoresRepository.js';

export class ScoresService {
    private readonly scoresRepository: ScoresRepository;

    constructor() {
        this.scoresRepository = new ScoresRepository();
    }

    public async getScores(): Promise< { score: number, date: Date } > {
            const scores = await this.scoresRepository.getScores();
            return { score: scores.score, date: scores.share_at };
        }

    public async postScore(score: number): Promise<number> {
        return this.scoresRepository.postScore(score);
    }

}
