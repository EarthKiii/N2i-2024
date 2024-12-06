import { db } from '../utils/database.js';

export class ScoresRepository {
    public async getScores(): Promise<number> {
        const result = await db.get('SELECT score, share_at FROM scores');
        return result?.count || 0;
    }

    public async postScore(score: number): Promise<number> {
        const result = await db.run('INSERT INTO scores (score) VALUES (?)', [score]);
        return result.lastID;
    }
}
