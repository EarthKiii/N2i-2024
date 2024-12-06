import { db } from '../utils/database.js';

export class PantheonRepository {
    public async getPlayers(): Promise<number> {
        const result = await db.get('SELECT COUNT(*) FROM players');
        return result?.count || 0;
    }

    public async postPlayer(): Promise<number> {
        const result = await db.run('INSERT INTO players DEFAULT VALUES');
        return result.lastID;
    }
}
