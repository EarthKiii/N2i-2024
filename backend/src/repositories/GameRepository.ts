import { db } from '../utils/database.js';

export class GameRepository {
    public async getTotalGames(): Promise<number> {
        const result = await (await db).get('SELECT COUNT(*) AS count FROM games');
        return result?.count || 0;
    }

    public async getCompletedGames(): Promise<number> {
        const result = await (await db).get('SELECT COUNT(*) AS count FROM games WHERE status = "completed"');
        return result?.count || 0;
    }

    public async getAbandonedGames(): Promise<number> {
        const result = await (await db).get('SELECT COUNT(*) AS count FROM games WHERE status = "abandoned"');
        return result?.count || 0;
    }
}
