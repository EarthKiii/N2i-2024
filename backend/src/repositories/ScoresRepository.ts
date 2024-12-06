import { db } from '../utils/database.js';

export class ScoresRepository {
    public async getScores(): Promise<{ score: number, shared_at: Date }[]> {
        const result = await (await db).all('SELECT * FROM scores');
        return result.map((row: { score: number, shared_at: Date }) => ({
            score: row.score,
            shared_at: row.shared_at
        }));
    }

    public async postScore(score: number) {
        const result = await (await db).run('INSERT INTO scores (score) VALUES (?)', [score]);
        return result.lastID;
    }
}
