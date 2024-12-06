import { db } from '../utils/database.js';

export class GameRepository {
    public async getAllGames(): Promise<number> {
        const result = await db.get('SELECT COUNT(*) FROM games');
        return result?.count || 0;
    }

    public async postGame(): Promise<number> {
        const result = await db.run('INSERT INTO games DEFAULT VALUES');
        return result.lastID;
    }

    public async updateGame(gameId: number): Promise<number> {
        const result = await db.run('UPDATE games SET updated_at = CURRENT_TIMESTAMP WHERE id = ?', gameId);
        return result.changes;
    }

}
