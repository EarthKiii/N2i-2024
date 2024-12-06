import { db } from '../utils/database.js';

export class ScoresRepository {
    public async getScores(): Promise<{ score: number, share_at: Date }> {
        const result = await (await db).get('SELECT score, share_at FROM scores');
        return {
            score: result?.score || 0,
            share_at: result?.share_at
        };
    }

    public async postScore(score: number) {
        const result = await (await db).run('INSERT INTO scores (score) VALUES (?)', [score]);
        return result.lastID;
    }
}
