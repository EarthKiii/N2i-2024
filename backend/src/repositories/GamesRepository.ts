import { db } from '../utils/database.js';

export class GamesRepository {
    public async getAllGames(): Promise<{ game_id: number, game_time: number }> {
        const result = await (await db).get('SELECT game_id, game_time FROM games');
        return {
            game_id: result?.game_id || 0,
            game_time: result?.game_time
        }
    }

    public async postGame(gameId: number) {
        const result = await (await db).run('INSERT INTO games (game_id) VALUES (?)', [gameId]);
        return result.lastID;
    }

    public async updateGame(gameId: number, gameTime: number) {
        const result = await (await db).run('UPDATE games SET game_time = ? WHERE game_id = ?', [gameTime, gameId]);
        return result.lastID;
    }

}
