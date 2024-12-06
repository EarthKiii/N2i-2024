import { ScoresRepository } from '../repositories/scoresRepository.js';

export class ScoresService {
    private readonly scoresRepository: ScoresRepository;

    constructor() {
        this.scoresRepository = new ScoresRepository();
    }

    public async getScores(): Promise< { score: number, date: Date }[] > {
        const scores = await this.scoresRepository.getScores();
        return scores.map(score => ({ score: score.score, date: score.sharedAt }));
    }

    public async postScore(score: number) {
        return this.scoresRepository.postScore(score);
    }

}
