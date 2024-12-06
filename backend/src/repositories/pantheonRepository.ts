import { db } from '../utils/database.js';

export class PantheonRepository {
    public async getPlayers(): Promise<{ playerName: string, date: Date }[]> {
        const result = await (await db).all('SELECT * FROM pantheon');
        return result.map((row: { player_name: string, date: Date }) => ({
            playerName: row.player_name,
            date: row.date
        }));
    }

    public async postPlayer(playerName: string, date: Date) {
        const result = await (await db).run('INSERT INTO pantheon (player_name, date) VALUES (?, ?)', [playerName, date]);
        return result.lastID;
    }
}
