import { db } from '../utils/database.js';

export class GamesRepository {
    public async getAllGames(): Promise<{ gameId: number, gameTime: number }[]> {
        const result = await (await db).all('SELECT * FROM games');
        return result.map((row: { game_id: number, game_time: number }) => ({
            gameId: row.game_id,
            gameTime: row.game_time
        }));
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
