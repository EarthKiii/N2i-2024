import { db } from '../utils/database.js';

export class ReadTimesRepository {
    public async getAllReadTimes(): Promise<number> {
        const result = await db.get('SELECT COUNT(*) FROM read_times');
        return result?.count || 0;
    }

    public async getReadTime(popupId: string): Promise<number> {
        const result = await db.get('SELECT COUNT(*) FROM read_times');
        return result?.count || 0;
    }

    public async postReadTime(): Promise<number> {
        const result = await db.run('INSERT INTO read_times DEFAULT VALUES');
        return result.lastID;
    }
}
