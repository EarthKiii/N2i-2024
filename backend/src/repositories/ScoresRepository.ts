import { db } from '../utils/database.js';

export class ScoresRepository {
    public async getScores(): Promise<number> {
        const result = await db.get('SELECT COUNT(*) FROM scores');
        return result?.count || 0;
    }

    public async postScore(): Promise<number> {
        const result = await db.run('INSERT INTO scores DEFAULT VALUES');
        return result.lastID;
    }

}
