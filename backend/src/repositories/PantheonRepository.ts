import { db } from '../utils/database.js';

export class PantheonRepository {
    public async getPlayers(): Promise<{ player_name: string, date: Date | null }> {
        const result = (await db).get('SELECT player_name, date FROM pantheon');
        return {
            player_name: result?.player_name || "",
            date: result?.date || null
        }
    }

    public async postPlayer(playerName: string, date: Date) {
        const result = (await db).run('INSERT INTO pantheon (player_name, date) VALUES (?, ?)', [playerName, date]);
        return result.lastID;
    }
}
