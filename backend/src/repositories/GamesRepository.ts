import { db } from '../utils/database.js';

export class GamesRepository {
    public async getAllGames(): Promise<number> {
        const result = await db.get('SELECT game_id, game_time FROM games');
        return result?.count || 0;
    }

    public async postGame(gameId: number): Promise<number> {
        const result = await db.run('INSERT INTO games (game_id) VALUES (?)', [gameId]);
        return result.lastID;
    }

    public async updateGame(gameId: number, gameTime: number): Promise<number> {
        const result = await db.run('UPDATE games SET game_time = ? WHERE game_id = ?', [gameTime, gameId]);
        return result.changes;
    }

}
