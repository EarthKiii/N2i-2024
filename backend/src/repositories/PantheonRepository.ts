import { db } from '../utils/database.js';

export class PantheonRepository {
    public async getPlayers(): Promise<number> {
        const result = await db.get('SELECT player_name, date FROM pantheon');
        return result?.count || 0;
    }

    public async postPlayer(playerName: string, date: Date): Promise<number> {
        const result = await db.run('INSERT INTO pantheon (player_name, date) VALUES (?, ?)', [playerName, date]);
        return result.lastID;
    }
}
